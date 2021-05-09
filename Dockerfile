FROM node:12-alpine as prod

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ENV NODE_ENV=production

# DEV CONFIG
FROM prod as dev

EXPOSE 3000

RUN npm install -g nodemon

RUN npm install --only=dev