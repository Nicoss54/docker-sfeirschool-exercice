FROM node:6.11.0
EXPOSE 3000
RUN mkdir app
WORKDIR /app
ADD . /app
RUN npm install
ENTRYPOINT [ "/usr/local/bin/npm", "start" ]
