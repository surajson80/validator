const express = require('express');
const app = express();
const { validateCheck } = require('./validator');
app.use(express.json());
const axios = require('axios')

//create an api to check the response and status
app.post('/check', (req, res) => {
    const { error, value } = validateCheck(req.body);
    if (error) {
        // console.log(error.details);
        let newArr = error.details.map((x) => {
            let y = x.message;
            return y;
        });
        return res.send(newArr);
    }
    res.send("Successfully Payment").status(200);
});

module.exports = app

app.listen(4000, () => {
    console.log("Server started on port 4000");
});