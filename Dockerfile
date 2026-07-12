ARG EXIST_VERSION=release
ARG BUILD=local
ARG ROUTER_VERSION=1.12.1

# START STAGE 1
FROM ghcr.io/eeditiones/builder:latest AS builder

ARG ROUTER_VERSION

WORKDIR /tmp

# Build EXPATH dependencies required by the generated tei-publisher app
RUN git clone --depth 1 https://github.com/eeditiones/jinks-templates.git \
    && cd jinks-templates \
    && ant

RUN git clone --depth 1 https://github.com/eeditiones/tei-publisher-lib.git \
    && cd tei-publisher-lib \
    && ant

# tei-publisher-app is generated before docker build by ci/setup-tei-publisher-app.sh
# using Jinks main + ci/tp_config.json (see .github/workflows/node.js.yml).
COPY tei-publisher-app/ tei-publisher-app/
WORKDIR /tmp/tei-publisher-app

# Inject the webcomponents built in this repo (tp_config.json sets script.webcomponents=local)
COPY dist/*.js resources/lib/
COPY dist/*.js resources/scripts/
COPY i18n/common/* resources/i18n/common/

RUN ant xar

WORKDIR /tmp

ADD http://exist-db.org/exist/apps/public-repo/public/roaster-${ROUTER_VERSION}.xar 001.xar

FROM duncdrum/existdb:${EXIST_VERSION} AS build_local

ARG USR=root
USER ${USR}

ONBUILD COPY --from=builder /tmp/*.xar /exist/autodeploy/
ONBUILD COPY --from=builder /tmp/jinks-templates/build/*.xar /exist/autodeploy/004.xar
ONBUILD COPY --from=builder /tmp/tei-publisher-lib/build/*.xar /exist/autodeploy/005.xar
ONBUILD COPY --from=builder /tmp/tei-publisher-app/build/*.xar /exist/autodeploy/006.xar

# TODO(DP): Tagging scheme add EXIST_VERSION to the tag
FROM ghcr.io/jinntec/base:main AS build_prod

ARG USR=nonroot
USER ${USR}

ONBUILD COPY --from=builder /tmp/*.xar /exist/autodeploy/
ONBUILD COPY --from=builder /tmp/jinks-templates/build/*.xar /exist/autodeploy/004.xar
ONBUILD COPY --from=builder /tmp/tei-publisher-lib/build/*.xar /exist/autodeploy/005.xar
ONBUILD COPY --from=builder /tmp/tei-publisher-app/build/*.xar /exist/autodeploy/006.xar

FROM build_${BUILD}

ARG USR
USER ${USR}

WORKDIR /exist

ARG CACHE_MEM
ARG MAX_BROKER
ARG JVM_MAX_RAM_PERCENTAGE
ARG HTTP_PORT=8080
ARG HTTPS_PORT=8443

ARG NER_ENDPOINT=http://localhost:8001
ARG CONTEXT_PATH=auto
ARG PROXY_CACHING=false

ENV JDK_JAVA_OPTIONS="\
    -Dteipublisher.ner-endpoint=${NER_ENDPOINT} \
    -Dteipublisher.context-path=${CONTEXT_PATH} \
    -Dteipublisher.proxy-caching=${PROXY_CACHING}"

# pre-populate the database by launching it once and change default pw
RUN [ "java", "org.exist.start.Main", "client", "--no-gui",  "-l", "-u", "admin", "-P", "" ]

EXPOSE ${HTTP_PORT} ${HTTPS_PORT}
