ARG EXIST_VERSION=release
ARG BUILD=local
ARG PUBLISHER_VERSION=master

# START STAGE 1
FROM ghcr.io/eeditiones/builder:latest AS builder

ARG ROUTER_VERSION=1.10.0
ARG PUBLISHER_VERSION

# Build tei-publisher-app
RUN  git clone https://github.com/eeditiones/tei-publisher-app.git \
    && cd tei-publisher-app \
    && git checkout ${PUBLISHER_VERSION} \
    # if you prefer to have webcomponents included locally, comment out following line and
    # enable the ones below
    && sed -i 's/$config:webcomponents :=.*;/$config:webcomponents := "local";/' modules/config.xqm \
    && ant -Dnpm=npm xar-local

WORKDIR /tmp/tei-publisher-app

COPY dist/*.js resources/scripts/
COPY i18n/common/* resources/i18n/common/

RUN ant

WORKDIR /tmp

ADD http://exist-db.org/exist/apps/public-repo/public/roaster-${ROUTER_VERSION}.xar 001.xar
ADD https://github.com/eeditiones/tei-publisher-lib/releases/latest/download/tei-publisher-lib.xar 002.xar

FROM duncdrum/existdb:${EXIST_VERSION} AS build_local

ARG USR=root
USER ${USR}

ONBUILD COPY --from=builder /tmp/tei-publisher-app/build/*.xar /exist/autodeploy/
ONBUILD COPY --from=builder /tmp/*.xar /exist/autodeploy/

# TODO(DP): Tagging scheme add EXIST_VERSION to the tag
FROM  ghcr.io/jinntec/base:main AS build_prod

ARG USR=nonroot
USER ${USR}

# Copy EXPATH dependencies
ONBUILD COPY --from=builder --chown=${USR} /tmp/tei-publisher-app/build/*.xar /exist/autodeploy/
ONBUILD COPY --from=builder --chown=${USR} /tmp/*.xar /exist/autodeploy/


FROM build_${BUILD}

ARG USR
USER ${USR}

WORKDIR /exist

# ARG ADMIN_PASS=none

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

# ENV JAVA_TOOL_OPTIONS="\
#   -Dfile.encoding=UTF8 \
#   -Dsun.jnu.encoding=UTF-8 \
#   -Djava.awt.headless=true \
#   -Dorg.exist.db-connection.cacheSize=${CACHE_MEM:-256}M \
#   -Dorg.exist.db-connection.pool.max=${MAX_BROKER:-20} \
#   -Dlog4j.configurationFile=/exist/etc/log4j2.xml \
#   -Dexist.home=/exist \
#   -Dexist.configurationFile=/exist/etc/conf.xml \
#   -Djetty.home=/exist \
#   -Dexist.jetty.config=/exist/etc/jetty/standard.enabled-jetty-configs \
#   -Dteipublisher.ner-endpoint=${NER_ENDPOINT} \
#   -Dteipublisher.context-path=${CONTEXT_PATH} \
#   -Dteipublisher.proxy-caching=${PROXY_CACHING} \
#   -XX:+UseG1GC \
#   -XX:+UseStringDeduplication \
#   -XX:+UseContainerSupport \
#   -XX:MaxRAMPercentage=${JVM_MAX_RAM_PERCENTAGE:-75.0} \
#   -XX:+ExitOnOutOfMemoryError"

# pre-populate the database by launching it once and change default pw
RUN [ "java", "org.exist.start.Main", "client", "--no-gui",  "-l", "-u", "admin", "-P", "" ]

EXPOSE ${HTTP_PORT} ${HTTPS_PORT}
