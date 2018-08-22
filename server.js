"use strict";
// Requiere npm
const
    express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = 3000; // Port of application

// Utilisation de app, c'est a dire d'express
app
    .all('*', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(express.static('auth'))

//On se connect à mongodb
mongoose.connect('mongodb://localhost/bdd')
let db = mongoose.connection
db.on('error', console.error.bind(console, 'Erreur lors de la connexion'))
db.once('openUri', () => {
    console.log("Connexion à la base OK")
})

//Création du shema
const UrlShema = mongoose.Schema({
    url: String
}),
    url = mongoose.model("urlData", UrlShema),
    //Creation de la route
    routes = express.Router();
routes
    .route("/") // get --> http://localhost:3000/
    .get((req, res) => {
        url.find((err, urlData) => {
            if (err) {
                res.send(err);
            }
            res.json({ urlData })
        })
    })
    .post((req, res) => {
        if (req.body.password === 'toto' && req.body.username === 'dev') { // il faut faire passer en params le password et le username pour pouvoir  faire un post 
    // Attention ceci est une façon simple de faire l'auth en aucun cas une façon sécuriser , il faudra la changer , une lib existe => password
            var urlData = new url();
            urlData.url = req.body.url // assigné notre formData à notre object pour le save en bdd
            urlData.save((err) => {
                if (err) {
                    res.send(err)
                }
                res.send({ message: "votre url à été sauvegarder", code: 200 }) // Messaage tout vas bien
            })
        } else {
            res.send({ message: "Vous ne pouvez pas utiliser cet url", code: 401 }) // Messaage tout vas bien
        }

    });
//chemin
app.use("/url", routes);

//On finit avec un beau listen
app.listen(port, () => {
    console.log("Adresse du serveur : http://localhost:" + port);
});

