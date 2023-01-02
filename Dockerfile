FROM node:latest
WORKDIR /app
COPY . /app
COPY package.json /app
RUN npm install
CMD node server.js
EXPOSE 9999
