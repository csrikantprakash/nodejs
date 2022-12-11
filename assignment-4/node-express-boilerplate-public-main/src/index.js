const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.post("/add", (req, res) => {

    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if (isNaN(num1) || isNaN(num2)) {
        return res.json({
            "status": "error",
            "message": "Invalid data types"
        })
    }
    let sum = Number(num1) + Number(num2);

    if (Number(num1) < ((-1) * (10 ** 6)) || Number(num2) < ((-1) * (10 ** 6)) || sum < ((-1) * (10 ** 6))) {
        return res.json({
            "status": "error",
            "message": "Underflow"
        })
    }

    if (Number(num1) > (10 ** 6) || Number(num2) > (10 ** 6) || sum > (10 ** 6)) {
        return res.json({
            "status": "error",
            "message": "Overflow"
        })
    }

    return res.json({
        "status": "success",
        "message": `the sum of given two numbers ${sum}`
    }
    )
});

app.post("/sub", (req, res) => {

    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if (isNaN(num1) || isNaN(num2)) {
        return res.json({
            "status": "error",
            "message": "Invalid data types"
        })
    }
    let difference = Number(num1) - Number(num2);

    if (Number(num1) < ((-1) * (10 ** 6)) || Number(num2) < ((-1) * (10 ** 6)) || difference < ((-1) * (10 ** 6))) {
        return res.json({
            "status": "error",
            "message": "Underflow"
        })
    }

    if (Number(num1) > (10 ** 6) || Number(num2) > (10 ** 6) || difference > (10 ** 6)) {
        return res.json({
            "status": "error",
            "message": "Overflow"
        })
    }

    return res.json({
        "status": "success",
        "message": `the difference of given two numbers ${difference}`
    }
    )
});

app.post("/multiply", (req, res) => {

    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if (isNaN(num1) || isNaN(num2)) {
        return res.json({
            "status": "error",
            "message": "Invalid data types"
        })
    }
    let product = Number(num1) * Number(num2);

    if (Number(num1) < ((-1) * (10 ** 6)) || Number(num2) < ((-1) * (10 ** 6)) || product < ((-1) * (10 ** 6))) {
        return res.json({
            "status": "error",
            "message": "Underflow"
        })
    }

    if (Number(num1) > (10 ** 6) || Number(num2) > (10 ** 6) || product > (10 ** 6)) {
        return res.json({
            "status": "error",
            "message": "Overflow"
        })
    }

    return res.json({
        "status": "success",
        "message": `the product of given two numbers ${product}`
    }
    )
});

app.post("/divide", (req, res) => {

    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if (isNaN(num1) || isNaN(num2)) {
        return res.json({
            "status": "error",
            "message": "Invalid data types"
        })
    }

    if (Number(num2) == 0) {
        return res.json({
            "status": "error",
            "message": "Cannot divide by zero"
        })
    }

    let division = Number(num1) / Number(num2);

    if (Number(num1) < ((-1) * (10 ** 6)) || Number(num2) < ((-1) * (10 ** 6)) || division < ((-1) * (10 ** 6))) {
        return res.json({
            "status": "error",
            "message": "Underflow"
        })
    }

    if (Number(num1) > (10 ** 6) || Number(num2) > (10 ** 6) || division > (10 ** 6)) {
        return res.json({
            "status": "error",
            "message": "Overflow"
        })
    }

    return res.json({
        "status": "success",
        "message": `the division of given two numbers ${division}`
    }
    )
});
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;