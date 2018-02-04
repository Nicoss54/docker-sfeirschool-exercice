# Summary Project: A beautiful Todolist app containerized using Docker

### Introduction

Hello student, this is your final mission (if you accept it) to complete this SFEIR School. This mission consists to deploy an complete application using Docker.

This app is divided into three parts: 
* a Mongo Database to persist your data;
* a back-end which exposes an API REST written with NodeJs and the HAPI framework;
* a front-end which consists on a todolist creations written with Angular.


### Mongo Database

* Pull an official image of Mongo database from the docker hub
* Create a docker container named todo-database which exposes the port 27017
* Check if the database is correctly started (display the logs of the container)

### Backend

* Create the Dockerfile
* From your Dockerfile buid an image named todo-backend-image
* Create a docker container named todo-backend which exposes the port 3000
* Check if the container is correctly created (display the logs, normally there is an error: connection to database impossible)
* Push your image onto the docker hub

### Frontend

* Create the Dockerfile
* From your docker file build an image named todo-frontend-image
* Create a docker container named todo-frontend which exposes the port 4200
* Check if the container is correctly created (display the logs)
* Go to the url: http://localhost:4200 (A UI must appear)
* Push your image onto the docker hub

### Networks

At this moment of the project, normally nothing is linked, so all the parts of this project can't work together. You must linked the containers between them with a bit of security.
Indeed, the front part must not communicate with the database part. Only the backend part can communicate with the mongo database. The front part must just communicate with the backend parts.

Let's go to do that

* Create a network named todo-db with an alias named mongo. This network is a bridge type.
* Link your container database with the container backend on this network
* Check if your container back start without errors
* Create a network named todo-web. This network is also a bridge type
* Link your container front with the container back on this network
* Go to http://localhost:4200 and create your first todo! (normally it works)

### Docker compose for more fun

* Remove all your containers and images
* Create a Docker compose, using your image on the docker hub
* Use docker compose command to start everything
* Check if everything works as expected
