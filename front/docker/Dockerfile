# create image with the lts version of node
FROM node:6.11.0
# expose your app port
EXPOSE 4200
# create directory where you app will be placed
RUN mkdir app
# change directory and go to the directroy "app"
WORKDIR /app
# add source app in your new directory
ADD . /app
# install your dependencies of your project
RUN npm install
# serve your application
ENTRYPOINT ["/usr/local/bin/npm","run","start"]
