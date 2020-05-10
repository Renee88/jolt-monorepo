#Volt schedule

A session secheduling program that enables session request registration and session scheduling. An approved session request is added to the session page. A session cannot be removed, only canceled.

## Tech list
### Client
- ReactJS
- Redux and a private jolt-mobx package were used for state management
### Server & DB
- NestJS
- Knex.js
- MySQL

## Getting Started

Follow the next steps to run the app on your machine.

### Prerequisites

- Clone or download this directory.
- Install the dependencies by running ```yarn install``` in the root directory.

#### MySQL DB
- Make sure you have MySQL 5.7 installed.
- If you are using MySQL 8.0 make sure to change the client authentication protocol by the following command : ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'. This way you won't have any conflicts of authentication.
- After you made sure mysql server is up and running, create a DB named mydb.
##### Data migration - knex.js
- Inside the nestjs-server directory set a .env file with the following variables (according to your local db settings):
.. DB_HOST 
.. DB_USER 
.. DB_PW
- Change the port according to your db port in the knexfile.js
- Go to the backend/nestjs-server dir and run ```yarn migrate``` to create tables.
- When migration is complete run ```yarn seed``` to load the tables with data.

#### NestJS Server
- run ```yarn start``` in backend/nestjs-server

#### Client app
- In the web-client directory run ```yarn start``` to start the webpack server.

###### If you followed the guidlines (assuming I didn't forget any steps :)) the app should be running.

## Available features and display

### Complete pages:
- Session requests
- Sessions

### Partly complete:
- Login (Landing page)
- Users
- Talks
- Rooms

..* These pages contain lists of Users, Talks and Rooms however when clicked no details are displayed.
..* In the users page there is an option to remove a user from the list.

## Future features:
- Functional login page
- Users Talks and Rooms pages filled with dummy details on each entity.

<img src ="/images/Landing.png" height = 400>


- A press on the hamburger icon leads the user to a drawer menu with the following options: add expenses, watch monthly transactions, and see a detailed list from the first record until today.
