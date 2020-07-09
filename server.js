const express = require('express');
const cors = require('cors');

app = express();
port = process.env.port || 5000;

app.use(cors());
app.listen(port, () => {console.log("Backend server live on port " +port)});

app.get("/", (req,res) => {
    res.send({message: "We are live and connected!"});
});