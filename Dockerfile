FROM node:latest

RUN mkdir -p /usr/src/apps/node

WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/

EXPOSE 8080

CMD [ "npm", "start" ]
