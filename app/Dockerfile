FROM node:alpine3.10

WORKDIR /app

ADD . .

RUN yarn global add serve

RUN npm install

RUN npm build

ENTRYPOINT [ "serve", "-s", "build", "-l", "3000"]