const houses = require('./db.json');
let globalIndex = 4;

module.exports = {
   getHouses: (req, res) => {
      res.status(200).send(houses);
   },
   deleteHouse: (req, res) => {
      const index = houses.findIndex(elem => elem.id === +req.params.id);
      houses.splice(index, 1);
      res.status(200).send(houses);
   },
   createHouse: (req, res) => {
      const {address, price, imageURL} = req.body;
      // if (!address || !price || !imageURL) { res.status(400).send('Missing information'); return;}
      const newHouse = {
         id: globalIndex,
         address,
         price,
         imageURL
      };
      globalIndex++;
      houses.push(newHouse);
      res.status(200).send(houses);
   },
   updateHouse: (req, res) => {
      const index = houses.findIndex(elem => elem.id === +req.params.id);
      const {type} = req.body;
      if (type === 'minus' && houses[index].price < 10000) { res.status(400).send('Price cannot be lower than zero'); }
      else if (type === 'minus') {
         houses[index].price -= 10000;
         res.status(200).send(houses);
      }
      else if (type === 'plus') {
         houses[index].price += 10000;
         res.status(200).send(houses);
      }
      else { res.status(500).send('Something went wrong'); }
   }
}