const express = require('express');
const app = express();


app.listen(process.env.PORT || 3000, console.log("SERVER ON"))


app.get("/home", (req, res) => {
    res.send("Funciona! estoy online :D")
})