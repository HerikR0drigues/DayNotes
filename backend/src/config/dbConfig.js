const mongoose = require("mongoose");

const dbConfig = 'mongodb+srv://herik:1341@annotations.7scfe.mongodb.net/?retryWrites=true&w=majority&appName=Annotations';

const connection = mongoose.connect(dbConfig)
    .then(() => {
        console.log("Conexão ao MongoDB estabelecida com sucesso!");
    })
    .catch((error) => {
        console.error("Erro ao conectar ao MongoDB:", error);
    });

module.exports = connection;
