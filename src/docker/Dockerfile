#+++++++++++++++++++++++++#
# Resume Docker container #
#+++++++++++++++++++++++++#

FROM soglad/node:6.9.1-alpine
LABEL vendor=Palmtale
MAINTAINER palmtale<m@glad.so>

ENV APP_HOME=/usr/local/app \
    APP_PORT=5000 \
    APP_ENV=production

COPY * /usr/local/app
RUN mv /usr/local/app/entry /usr/local/bin/ \
    && chmod u+x /usr/local/bin/entry \
    && rm -rf /usr/local/app/Dockerfile /usr/local/app/package.json

VOLUME $APP_HOME/data
EXPOSE $APP_PORT
WORKDIR $APP_HOME
ENTRYPOINT ["entry"]
CMD ["node", "."]