const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;




/* This must be added before GET & POST routes.*/
app.use(bodyParser.urlencoded({ extended: true }));

/* Serve up static files (HTML, CSS, Client JS)*/
app.use(express.static("server/public"));

/* GET & POST Routes go here*/
app.get('/calculator', function(req, res){
    console.log('request at /calculator was made', req);


    res.sendStatus(200);
    res.send(whateverobjectthatYouCalculated)
})



/* req is what the client sent to the server */
app.post ("/calculator-inputs", function(req, res){
    /* we want to see what the client sent to the server */
    console.log(req.body);
    console.log(req.body.mathProblem);
   
    res.sendStatus(200);
})

function mathOutputs() {
    console.log('in mathOutputs');
    let additionOutputs= valueOne + valueTwo;
}









// ------- End of page ---------------------------
/* start up our server */
app.listen(port, function () {
    console.log('listening to port', port);
});