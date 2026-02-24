const express = require('express');
// require('dotenv').config();

const bodyParser = require('body-parser');
// const { City } = require('./models/index');
const { PORT } = require('./config/serverConfig');
// const CityRepository = require('./repository/city-repository');


const setupAndStartServer = async () => {

    // Create an Express object
    const app = express();
    // const PORT = 3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        // console.log(process.env.PORT);
        // console.log(db.City);


    //     const repo = new CityRepository();
    //     repo.createCity({ name: 'Old-Delhi' }).then((city) => {
    //         console.log('City created:', city.toJSON());
    //     }).catch((error) => {
    //         console.error('Error creating city:', error);
    //     });
    //    repo.deleteCity(1)
    });


}

setupAndStartServer();

