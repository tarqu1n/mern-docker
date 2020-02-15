FROM node:13.8-alpine3.11

# copy application files
WORKDIR /application
COPY ./server ./server
COPY ./client/build ./client/build

WORKDIR /application/server
# ask yarn to install our server dependencies
RUN yarn

# expose the port that the server is running on
EXPOSE 8080

# when the image is run then execute main.js file with node to start the server
CMD ["node", "main.js"]
