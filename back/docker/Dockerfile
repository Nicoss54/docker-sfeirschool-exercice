FROM node:8.9.4
EXPOSE 3000
RUN mkdir app
WORKDIR /app
ADD . /app
RUN npm install
ENTRYPOINT [ "/usr/local/bin/npm", "run", "start-container" ]
