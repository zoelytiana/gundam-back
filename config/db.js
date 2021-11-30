const mongoose = require("mongoose")

mongoose.connect("mongodb://" + process.env.DB_USER_PASS + "",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
    .then(() => console.log("Connexion à Mongodb"))
    .catch((error) => console.log("La connexion à Mongodb à échoué", error));
