FROM node:16.17.0-alpine3.15

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/

EXPOSE 5000
CMD ["npm", "run", "start:dev"]
