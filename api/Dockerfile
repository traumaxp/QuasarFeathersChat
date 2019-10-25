# Feathers API

FROM  node:12.10-alpine

RUN mkdir /srv/api && chown node:node /srv/api

WORKDIR /srv/api

USER node

# make global npm packages install under node user
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

# enable running npm global binaries without path
ENV PATH=$PATH:/home/node/.npm-global/bin 

RUN npm install -g @feathersjs/cli

COPY --chown=node:node package.json package-lock.json ./

RUN npm install --quiet

# Can be removed once we have some dependencies in package.json.
RUN mkdir -p node_modules

# EXPOSE 3030
