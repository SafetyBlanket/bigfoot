# Create image based on the official Node 6 image from dockerhub
FROM node:latest

# Install Angular tools
RUN npm install -g @angular/cli

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app
