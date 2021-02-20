FROM node:12-alpine

WORKDIR /app

COPY package.json .

RUN NODE_ENV=development npm install && npm i -D

COPY . .

CMD ["npm", "run", "start:dev"]