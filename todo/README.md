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
- The `stubs` folder contains logic for stubbing our migration and seeds
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

### Migrations & Seeding

- **Creating Tables**
Let's create a Users and Tasks table using the knex command line tool. In the root of our project run the following commands:

```shell
$ yarn make:migration create_users_table
$ yarn make:migration create_todos_table
```
And update the migration file im `migration` folder.  

Refer to the following examples.  
- [Create Todos Tables](./src/migrations/20210213193225_create_todo_table.js)
- [Create Users Tables](./src/migrations/20210213194241_create_user_table.js)

Now we can run the below command performing a migration and updating our local database:

```shell
$ yarn migrate
```

We should now have a new table named `users` & `todos` in our database.

- **Seeding Your Database**

Lets create some seed files in this order:

```shell
$ yarn make:seeder 01_add_users
$ yarn make:seeder 02_add_tasks
```

Now lets insert some data into our seed scripts. Refer to following example code.

- [Add Users](./src/seeds/01_add_users.js)
- [Add Todos](./src/seeds/02_add_todos.js)

Now we can run the below command in the root of our project to seed our database!

```shell
$ yarn seed
```

![Migration and Seed](../screenshots/project_03.gif)
