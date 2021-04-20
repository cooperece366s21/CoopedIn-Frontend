# References
all based on Ubuntu 20.04

## User Login / User Authentication
[How To Add Login Authentication to React Applications](https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications)

```bash
// in one terminal session
// this will start the temporary API to create token
$ node server.js

// in another terminal session
// actual web ui
$ npm start

// access the web ui from http://localhost:3000
```

## npm Installation / Setup
### installation
```bash
# install npm
$ sudo apt install -y npm
```

### starting new project (not needed)
```bash
$ npm init react-app client
```


### npm commands
```bash
$ npm start
#    Starts the development server.

$ npm run build
#    Bundles the app into static files for production.

$ npm test
#    Starts the test runner.

$ npm run eject
#    Removes this tool and copies build dependencies, configuration files
#    and scripts into the app directory. If you do this, you can’t go back!
```