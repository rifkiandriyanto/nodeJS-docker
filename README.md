<p align="center">
  <img width="50%" src="https://miro.medium.com/proxy/1*9hGvYE5jegHm1r_97gH-jQ.png">
</p>

# NodeJS-Docker
This repo shows how to get a Node.js app running inside a Docker container on a local computer.

[![Build Status](https://travis-ci.org/phpmyadmin/docker.svg?branch=master)](https://travis-ci.org/phpmyadmin/docker)



For this demo to work, [Docker](http://docker.com) and [Node.js](http://nodejs.org) need to be installed.


## Demo Steps 

### 1. Create an app directory and use NPM to create a package.json file and add the Express framework. 

```bash
$ mkdir hello-world
$ cd hello-world
$ npm init
$ npm install —save express
```

### 2. Create an index.js for our app code. 

```bash
$ touch index.js
```

### 3. Open a code editor and add some code for a simple hello world app. 

```javascript
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8081, function () {
  console.log('app listening on port 8081!')
})
```

### 4. Note that the Node code is using port 8081. Then, run the app in Node and open it in a browser.

```bash
$ node index.js
```

Node should tell you the app is running on port 8081. Test the app by opening http://localhost:8081.

If you see "Hello World" all is good. 

### 5. Create a Dockerfile

```bash
$ touch Dockerfile
```
Note: you can also just create a file from your code editor. The Dockerfile is just a plain text file named 'Dockerfile' with no extension.

### 6. Add instructions for Docker into the Dockerfile

```bash
FROM node:10
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node index.js
EXPOSE 8082
```

### 7. Build a Docker image

To build the Docker image, we use the docker build command with the -t parameter to tag our image with the name hello-world and we provide a reference to the path for the directory where our Dockerfile exists. 

In our case, it’s in the same directory that I’m running the docker build command from so, I’ll just use a dot.

```bash
$ docker build -t hello-world .
```

### 8. Run our Docker container

```bash
$ docker run -p 8082:8081 hello-world
```

That's it! Your Node.js app is running in Docker. 

## Clean up

When you're done walking through this demo you can use the following steps to remove the hello-world container and image.

### 1. Get the container id

Use the docker ps command to list the running containers and copy the container id.

```bash
$ docker ps
```
### 2. Stop the container

```bash
$ docker stop your-container-id
```
### 3. Remove the container

```bash
$ docker rm your-container-id
```
### 4. Remove the image

```bash
$ docker rmi hello-world
``` 