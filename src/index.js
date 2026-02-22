const express = require('express');
// require('dotenv').config();

const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async () => {

    // Create an Express object
    const app = express();
    // const PORT = 3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        // console.log(process.env.PORT);
    });


}

setupAndStartServer();

