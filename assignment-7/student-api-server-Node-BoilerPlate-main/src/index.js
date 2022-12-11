const studentArray = require('./InitialData');
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
var count = 7;
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// your code goes here
app.get("/api/student", async (req, res) => {
    try {
        res.json({
            status: "Success",
            studentArray
        })
    } catch (e) {
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});
app.get("/api/student/:id", (req, res) => {
    const student = studentArray.filter((student) => {
        if (student.id == req.params.id) return student;
    })
    if (student.length != 0) {
        res.json({
            status: "Success",
            student
        })
    } else {
        res.status(404).json({
            status: "Invalid Request",
        })
    }
});
app.post("/api/student", (req, res) => {
    console.log(req.body);
    if (req.body.name == undefined || req.body.currentClass == undefined || req.body.division == undefined) return res.status(400).json({
        status: "Failed",
        message: "Please provide name, currentClass and division as inputs"
    })
    const newData = { "id": count + 1 };
    newData["name"] = req.body.name;
    newData["currentClass"] = req.body.currentClass;
    newData["division"] = req.body.division;
    studentArray.push(newData);
    res.json({
        status: "Success",
        studentArray
    })
    count++;

});
app.put("/api/student/:id", (req, res) => {
    let idToChange = req.params.id;
    var name = req.body.name;
    var currentClass = req.body.currentClass;
    var division = req.body.division
    let flag = true;
    if (name == undefined && currentClass == undefined && division == undefined) return res.status(400).json({
        status: "Failed",
        message: "Id not found/Invalid Request"
    });
    if (idToChange > count || idToChange < 1) return res.status(400).json({
        status: "Failed",
        message: "Id not found/Invalid Request"
    });
    studentArray.map((student) => {
        if (student.id == idToChange) {
            if (name != undefined) student["name"] = name;
            if (currentClass != undefined) student["currentClass"] = currentClass;
            if (division != undefined) student["division"] = division;
            flag = false;
        }
    })
    if (flag) {                                   //Previously deleted student Id is present but its still invalid as its deleted.            
        return res.status(400).json({
            status: "Failed",
            message: "Invalid Id"
        })
    }
    return res.json({
        status: "Success",
        studentArray
    })

});
app.delete("/api/student/:id", (req, res) => {
    const studentIndex = studentArray.findIndex((student) => student.id == req.params.id);
    if (studentIndex != -1) {
        studentArray.splice(studentIndex, 1);
        res.json({
            status: "Success",
            studentArray
        })
    } else {
        res.status(404).json({
            status: "Invalid Request",
        })
    }
});
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   