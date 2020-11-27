const express = require("express");
const body_parser = require("body-parser");
const userRoutes = require("./routes.js");

const app = express();

/* Partie 1 :
app.get("/", function(request, response) {
   
    return response.send("Hello World!");
});
*/

/* Parie 2
app.get("/etudiant/:firstName", function(request, response) {
    
    return response.send(
    `Le nom de l’étudiant est is ${request.params.firstName}`
    );
});
*/

/* Partie 3
app.get("/", (req, res) => {
    res.json({ message: "cà marche! " });
});
*/


app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

app.use("/users", userRoutes);



app.listen(3000, function() {
    console.log(
    "The server is running on port 3000!"
    );
});
