

/  
   - src/
        index.js // server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/

   - tests [later]
   - static/ 
   - temp/
   

// project setup :
 -clone the project on your local
 execute 'npm install' on the same path as of your root directory of the downloaded project
-create a '.env' file in the root directory and add the following environment variable 
- 'PORT=3000'
- inside the 'src/config' folder create a new file 'config.json' and then add the following piece of json

...
{
  "development": {
    "username": "your db login",
    "password": "your db password",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

...

- once you have added your db config as listed above , go to the src folder from your terminal and execute 'npx sequelize db:create'


## DB Design
  - aeroplane table
  - flight table 
  - Air port table
  - city table 
  

  -A flight belongs to an aeroplane but one aeroplane can be used in multiple flights
  -A city has many airports but one airport belongs to a city
  -one airport can have many flights , but a flight belongs to one airport 
   