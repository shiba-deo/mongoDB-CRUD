const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const privateRoutes = require('./routes/productRoutes')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', privateRoutes);

mongoose.set("strictQuery", false);


mongoose.connect('mongodb+srv://shibun:Shibun7459@learning-mongodb.bszhi65.mongodb.net/Learning-mongodb?retryWrites=true&w=majority').then(() => {
    console.log('Connected to MongoDB');
    app.listen(5000, () => {
        console.log("Node MongoDB is running on port 5000");
    });
}).catch((error) => {
    console.log(error);
});

