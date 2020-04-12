const express = require('express');
const niket = {
    age: 25,
    weight: 70,
    id: 8
};

const server =express()

server.get('/niket', (req, res) => {
    res.end(niket.age);
});

server.listen(8080, () => {
    console.log('Server is listening on port : \n 8080');
});