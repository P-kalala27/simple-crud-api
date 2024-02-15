const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product.model.js');
const productRoute = require('./routes/product.route.js')
const app = express();

//middleware to pass on json format
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//using all methode
app.use('/api/products', productRoute)

app.get('/', (req, res) => {
    res.send("hello from API server and the product");
});


//connection to the db
mongoose.connect("mongodb+srv://princekalala29:ccNie9Zr9XQD2LEc@cluster0.fxhzgpk.mongodb.net/Node-API?retryWrites=true&w=majority")
.then(() => {
    console.log("connected to the data base !!!");
    app.listen(3000, ()=> {
        console.log('server is running on port 3000');
    });
})
.catch(()=> {
    console.log("connexion dropped !!");
})