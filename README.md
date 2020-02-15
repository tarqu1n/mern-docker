# MERN-docker
A Tutorial for setting up the MERN Stack on Docker in a single container. The single container allows for simple deployment however does mean all parts of the application are tightly coupled to each other. This is not desirable for production applications but works well for small internal apps and tools.

## Architecture
- Database: [Mongodb](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- Server: [Node](https://nodejs.org/en/) with [Express](https://expressjs.com/)
- Client: [React](https://reactjs.org/)
- Package Manager:  [Yarn](https://yarnpkg.com/) using [npm](https://www.npmjs.com/)

The client and server code is placed within separate folders, `/client`, `/server` and each has its own dependencies.

## Server Setup

## Running

`docker build -t <name> .`

`docker run -p 8080:8080 <name>`

`docker ps`

`docker stop <image_id>`
