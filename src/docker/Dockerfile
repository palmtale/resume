#++++++++++++++++++++++++++++++++++++++
# Resume Docker container
#++++++++++++++++++++++++++++++++++++++

FROM soglad/node:6.8.1-alpine
LABEL vendor=Palmtale
MAINTAINER palmtale<m@glad.so>

ENV APP_HOME=/usr/local/app \
    APP_PORT=5000 \
    APP_ENV=production

COPY docker-entry /usr/local/bin/
RUN chmod u+x /usr/local/bin/docker-entry

VOLUME $APP_HOME $APP_HOME/data
EXPOSE $APP_PORT
WORKDIR $APP_HOME
ENTRYPOINT ["docker-entry"]
CMD ["node", "."]