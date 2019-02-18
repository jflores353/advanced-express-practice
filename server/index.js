const express = require("express");
const bodyParser = require("body-parser");
let mongoose = require("mongoose");
const port = 3001;

mongoose.connect('mongodb://jflores353:$T1nkyi25!@ds141815.mlab.com:41815/express-practice', 
{useNewUrlParser: true});


const contactRoutes = require("./routes/ContactsRoutes");
const vehicleRoutes = require("./routes/VehiclesRoutes");
const productsRoutes = require("./routes/ProductsRoutes");
const commentsRoutes = require("./routes/CommentsRoutes");


const app = express();
app.use(bodyParser.json());
app.use(contactRoutes);
app.use(vehicleRoutes);
app.use(productsRoutes);
app.use(commentsRoutes);

app.listen(port, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log(`Web server is now listening for messages on ${port}, err`);
});
