const express = require('express');

// Create our server
const app = express();
const PORT = 5001;



app.use(express.static('server/public'));
app.use(express.urlencoded());
// Start our server


app.listen(PORT, () => {
    console.log('listening on port', PORT);
});

let operations = []




// app.post('/numbers', function(req,res) {
//     console.log("in the post request", req.body)
//     //quoteList.push(req.body)
//    // let item = req.body
//     res.sendStatus(200)
//     calculateIt();
// })
let answer;
function calculateIt() {
    answer = req.body;
    if (req.body.operator === "+") {
        console.log(req.body)

        answer = Number(req.body.firstNum) + Number(req.body.secondNum)
    } else if (req.body.operator === "-") {
        

        answer = Number(req.body.firstNum) - Number(req.body.secondNum)
    } else if (req.body.operator === "*") {
        

        answer = Number(req.body.firstNum) * Number(req.body.secondNum)
    } else if (req.body.operator === "/") {
        

        answer = Number(req.body.firstNum) / Number(req.body.secondNum)
    }
    //  answer = req.body;
   // operations.push(answer)
}



app.get('/numbers', function (req, res) {
    console.log("request for /quotes was made");
    res.send(answer)
});






app.post('/numbers', function (req, res) {
    console.log("in the post request", req.body)
    //quoteList.push(req.body)
    // let item = req.body
    res.sendStatus(200)
    calculateIt
})