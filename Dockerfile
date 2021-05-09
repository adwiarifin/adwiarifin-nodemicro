FROM node:12-alpine as base

WORKDIR /app
COPY package*.json ./
EXPOSE 3000

FROM base as prod
ENV NODE_ENV=production
RUN npm ci
COPY . ./
CMD ["node", "index.js"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY . ./
CMD ["nodemon", "index.js"]