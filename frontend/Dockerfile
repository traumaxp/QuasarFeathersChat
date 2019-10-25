# Quasar SPA with Feathers
# inspired by https://jdlm.info/articles/2019/09/06/lessons-building-node-app-docker.htm

FROM  node:12.10-alpine

RUN mkdir /srv/app && chown node:node /srv/app

WORKDIR /srv/app

USER node

# make global npm packages install under node user
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

# enable running npm global binaries without path
ENV PATH=$PATH:/home/node/.npm-global/bin 

RUN npm install -g @vue/cli && \
    npm install -g @quasar/cli

COPY --chown=node:node package.json package-lock.json ./

RUN npm install --quiet

# Can be removed once we have some dependencies in package.json.
RUN mkdir -p node_modules

# EXPOSE 8080
