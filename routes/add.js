const express = require("express");
const router = express.Router();

const Add = require('../Models/add');

router.get("/", (res) => {
    res.send("This is add route");
});


router.get('/createForm', (res) => {
    Add.find((error, data) => {
        if(error)
        return next(error);
        else {
            res.json(data);
            console.log("Get method successful")
        }
    } 
    )
});

router.post('/createForm', (req, res) => {
    Add.create(req.body, (error, data) => {
                if(error)
                next(error);
                else{
                    res.json(data);
                    console.log("Post method successful")
                }
    }
    )
})

module.exports = router