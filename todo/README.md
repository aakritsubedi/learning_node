# todo api 

### Setting up project
- install Node.js [https://nodejs.org/](https://nodejs.org/)
- create a working folder
- navigate to working folder in terminal/command prompt
- `$ npm init` and enter the descriptions, this will initialize the *package.json* file stores all your dependencies

![Setting Up](../screenshots/project_01.gif)

### Folder Structure
This module contains the code for REST API for todo API.

```
todo/
├── package.json
├── public
│   └── assets
├── README.md
├── src
│   ├── constants
│   ├── controllers
│   ├── db.js
│   ├── env.js
│   ├── index.js
│   ├── knexfile.js
│   ├── middlewares
│   ├── migrations
│   ├── models
│   ├── routes
│   ├── seeds
│   ├── services
│   └── utils
└── yarn.lock
```

In the directory structure shown above:

- The `src` directory contains all the major source code
- The `constants` folder contains all the constant values that we use in the application
- The `controllers` folder contains the code that handles the logic of the application
- The `middlewares` folder contains middlewares for various routes
- The `migrations` folder contains codes that map various fields to table columns
- The `models` folder contains database model of our application
- The `routes` folder contains code that routes to different endpoints of our application
- The `seeds` folder contains seed data for our database
- The `stubs` folder contains logic for stubbing our unit tests
- The `utils` folder contains all the utilities that we use throughout our application

### Configure database
In this series we will be using `postgreSQL` db. 

- Add the necessary packages and configure the `.env` as show in `.env.example` file.

```shell 
$ yarn add knex pg
```

- Login to the postgreSQL and create the database

```
$ sudo -i -u postgres
<enter the password>
$ psql 
$ CREATE DATABASE todo;
```

![Setting up the database](../screenshots/project_02.gif)
