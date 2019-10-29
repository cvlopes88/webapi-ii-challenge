const express = require('express');

// const db = require('./data/db');

const dbRouter = require('./data/seeds/db-router');

const server = express();

server.use(express.json());

server.get('/', (req, res) =>{

});

server.use('/api/posts', dbRouter);





server.listen(5000, () => { console.log('n\$$$$$$$$$$$$$$$ Server Running on port 5000 $$$$$$$$$$$$$$$\n') });