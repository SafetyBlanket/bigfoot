# Project Bigfoot

This project is a living fullstack JavaScript environment.  

This is a customizable fullstack Javascript environment that uses:
* [Angular 7](https://angular.io/) - Great frontend framework for constructing SPAs.
* [Angular Material](https://material.angular.io/) - Great looking styling for Angular applications.
* [Angular Flex](https://github.com/angular/flex-layout/wiki) - 
* [Express](https://expressjs.com/) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [Swagger](https://swagger.io/) - The Best APIs are Built with Swagger Tools - RESTful interface.
* [MySQL8](https://www.mysql.com/) - Markdown parser done right. Fast and easy to extend.
* [PHPmyadmin](https://www.phpmyadmin.net/) - great UI boilerplate for modern web apps

## Running for development

Run the project in development environment by typing the following:

```sh
    docker-compose -f docker-compose-dev.yml up
```
And that's it! Co2mpose will start up all of the above services you're ready to go!

The node projects inside the system have special Docker build pipelines handle setup and installation which are also platform agnostic so you shouldn't require any changes going from Window/Mac/Linux.

The dockerfile sets the context of the container to the project root directory for the UI container.  This means you can terminal into a container that has all the tools required to interact with the application without requiring tools to be installed on your host machine.  Execute commands on the UI container by typing into the terminal: 

```sh
    docker container exec -it [container id] bash
    ng g m /modules/mymodule 
    ...
```

## Running for production

//TODO