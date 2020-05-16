const express = require("express");
const empArray = require("./empArray.js");
const addrArray = require("./addrArray.js");
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://s6nmo.csb.app");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//create a server object:
app.get("/getAllEmployees", function(req, res) {
  //res.write("Hello World!..."); //write a response to the client

  return res.status(200).send(empArray);
  //res.end(); //end the response
});
app.get("/getEmployeeAdress/:id", function(req, res) {
  console.log(req.params.id);
  let eId = parseInt(req.params.id, 10);
  let adrrJson = addrArray.find(elem => {
    return elem.empId === eId;
  });
  //res.write("Hello World!..."); //write a response to the client

  return res.status(200).send(adrrJson.address);
  //res.end(); //end the response
});

app.listen(8080, function() {
  console.log("server running on 8080");
}); //the server object listens on port 8080
