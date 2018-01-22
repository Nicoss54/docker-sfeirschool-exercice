# Summary Project: A beautifull Todolist in Docker

### Introduction

Hello student, this is your final mission ( if you accepted it) to complete this SFEIR School. This mission consist to deploy an app in your local docker.

This app is devided into three parts: 
* Mongo Database to persist your data
* Back-end which consist on an API REST write in node js whith the HAPI framework
* Front-end which consist on a todolist write in Angular


### Mongo Database

* Pull an offcial image of Mongo database from the docker hub/registry
* Create a docker container named todo-database which expose the port 27017
* Check if the database is correctly started (display the logs of the container)

### Backend

* Create a Docker file
* From your Docker file buid an image named todo-backend-image
* Create a docker container named todo-backend which expose the port 3000
* Check if the container is correctly created ( display the logs, normally there is an error: connection to database impossible)
* Pull your image on the docker hub

### Frontend

* Create a Docker file
* From your docker file build an image named todo-frontend-image
* Create a docker container named todo-frontend which expose the port 4200
* Check if the container is correctly created (display the logs)
* Go to the url: http://localhost:4200 ( A UI will must appear )
* Pull your image onb the docker hub

### Networks

At this moment of the project, normally nothing is linked, so all the parts of this project can't work together. You must linked the containers between them with a bit of security.
Indeed, the front part must not communicate with the database part. Only the backend part can communicate with the mongo database. The front part must just communicate with the backend parts.

Let's go to do that

* Create a network named todo-db with an alias named mongo. This network is a bridge type
* Link your container database with the container backend on this network
* Check if your container back start without errors
* Create a network named todo-web. This network is also a bridge type
* Link your container front with the container back on this network
* Go to http://localhost:4200 and create a Todo (normally it works)

### Docker compose for more fun

* Remove all your container and image
* Create a docker compose, using your image on the docker hub
* Use docker compose command
* Check if all work that you want

