# How to create this project

```sh
$ mkdir nodejs-sample
$ cd nodejs-sample
$ npm init # All Enter/yes
$ touch hello.js # Create and edit
$ touch main.js # Create and edit
$ touch app.js # Create and edit
$ npm install -g forever # Install forever
$ ndenv rehash # If using ndenv
```

## How to execute main.js/hello.js

```sh
$ node main.js
Hello World !
```

## How to execute app.js

```sh
$ node app.js
```

```sh
$ curl localhost:1337
Hello World !
```

## How to execute app.js with using ```forever```

```sh
$ forever start app.js
$ curl localhost:1337
Hello World !
$ forever stop app.js
```
