#!/usr/bin/env bash
# Generate tei-publisher-app with Jinks for CI and local Docker builds.
# Uses the latest jinks main branch (profiles) and ci/tp_config.json.
# Downloads the deployed app as a XAR (jinks update --sync only fetches changed
# files, not the full Ant project including build.xml).
set -euo pipefail

JINKS_REF="${JINKS_REF:-main}"
JINKS_IMAGE="${JINKS_IMAGE:-ghcr.io/eeditiones/jinks:latest}"
JINKS_SERVER="${JINKS_SERVER:-http://localhost:8080/exist/apps/jinks}"
CONTAINER_NAME="${JINKS_CONTAINER_NAME:-jinks-server-ci}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
APP_DIR="$ROOT/tei-publisher-app"
JINKS_SRC="$(mktemp -d /tmp/jinks-src.XXXXXX)"

cleanup() {
  docker rm -f "$CONTAINER_NAME" 2>/dev/null || true
  rm -rf "$JINKS_SRC"
}
trap cleanup EXIT

if lsof -Pi :8080 -sTCP:LISTEN -t >/dev/null 2>&1; then
  echo "Error: port 8080 is already in use. Stop the service or set JINKS_CONTAINER_NAME to use another setup."
  lsof -Pi :8080 -sTCP:LISTEN
  exit 1
fi

echo "Cloning jinks (${JINKS_REF})..."
git clone --depth 1 -b "$JINKS_REF" https://github.com/eeditiones/jinks.git "$JINKS_SRC"
echo "Building jinks XAR..."
(cd "$JINKS_SRC" && ant)

echo "Starting Jinks server (${JINKS_IMAGE})..."
docker pull "$JINKS_IMAGE"
docker run -d --name "$CONTAINER_NAME" -p 8080:8080 \
  -v "$JINKS_SRC/build:/exist/autodeploy" \
  "$JINKS_IMAGE"

echo "Waiting for Jinks API..."
for i in $(seq 1 120); do
  if curl -sf "${JINKS_SERVER}/api/configurations" >/dev/null 2>&1; then
    echo "Jinks is ready."
    break
  fi
  if [ "$i" -eq 120 ]; then
    echo "Timeout waiting for Jinks."
    docker logs "$CONTAINER_NAME" 2>&1 | tail -50
    exit 1
  fi
  sleep 2
done

echo "Creating tei-publisher app..."
npx --yes @teipublisher/jinks-cli create -q -c "$ROOT/ci/tp_config.json" -s "$JINKS_SERVER"

echo "Downloading tei-publisher app XAR..."
rm -rf "$APP_DIR"
mkdir -p "$APP_DIR"
(
  cd "$APP_DIR"
  npx --yes @teipublisher/jinks-cli run tei-publisher download -s "$JINKS_SERVER"
)

if [ ! -f "$APP_DIR/tei-publisher.xar" ]; then
  echo "Error: tei-publisher.xar was not downloaded."
  ls -la "$APP_DIR"
  exit 1
fi

echo "tei-publisher-app ready at ${APP_DIR}"
