const express = require('express');
const cors = require('cors');
const ctrl = require('./controller.js');

const app = express();
app.use(express.json());
app.use(cors());

//----- Endpoints -----//
app.get('/api/houses', ctrl.getHouses);
app.delete('/api/houses/:id', ctrl.deleteHouse);
app.post('/api/houses', ctrl.createHouse);
app.put('/api/houses/:id', ctrl.updateHouse);




const SERVER_PORT = 4004;
app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));