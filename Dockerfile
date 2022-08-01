FROM node:14.1.0-stretch-slim
WORKDIR /usr/src/app
RUN npm config set strict-ssl false
RUN npm install
COPY ./ ./
EXPOSE 8080
CMD ["/bin/sh", "-c", "node app.js"]

