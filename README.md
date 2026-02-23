

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