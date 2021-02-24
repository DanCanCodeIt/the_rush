FROM node:alpine3.13

WORKDIR /app

ADD . .

RUN yarn global add serve

RUN npm install

RUN npm run build

ENTRYPOINT [ "serve", "-s", "build", "-l", "3000"]