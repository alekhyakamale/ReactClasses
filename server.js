const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

app = express();
port = process.env.port || 5000;

app.use(cors());
app.listen(port, () => {console.log("Backend server live on port " +port)});

app.get("/", (res) => {
  res.json({ message: "Welcome to our application." });
});

//Express route
const addRoute = require('./routes/add');

//Connecting to MongoDB Atlas
const uri = "mongodb+srv://dbReact:1234@cluster0.y1lzb.mongodb.net/formdb?retryWrites=true&w=majority"
mongoose.Promise = global.Promise;
mongoose.connect(uri , {
  useNewUrlParser: true
}).then(() => {
    console.log('Database was successfully connected');
}, (error) => {
    console.log("Couldn't connect to Database "+error);
}
)

app.use(bodyparser.json());

app.use('/add', addRoute);





