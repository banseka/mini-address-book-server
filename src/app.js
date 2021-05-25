const express = require("express");
const Address = require("./models/addressModel");
require('./db/mongoose')

const app = express();

const port = 5000;

app.use(express.json());

//creating addres route
app.post("/addresses", async (req, res) => {
  try {
    console.log(req.body);
    const address = await new Address(req.body);
    await address.save();
    res.send(req.body);
  } catch (error) {
    res.send(error);
  }
});

//getting all the addresses route
app.get("/addresses", async (req, res) => {
  try {
    const addresses = await Address.find({});
    res.send(addresses);
  } catch (error) {
    res.send(error);
  }
});

//getting and address by id route
app.get("/addresses/:id", async (req, res) => {
  try {
    const id = req.params;
    const address = await Address.findOne({ id });
    if (!address) {
      return res.status(404).send();
    }
    res.status(200).send(address);
  } catch (error) {}
});

app.listen(port, () => {
  console.log(`app now running on ${port}`);
});
