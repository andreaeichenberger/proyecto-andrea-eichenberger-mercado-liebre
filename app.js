// Importando los módulos necesarios: express y path.
const express = require("express");
const app = express();
const path = require("path");

// Definiendo la ruta de mi carpeta estática.
app.use(express.static(path.resolve(__dirname,"./public")));

app.listen(3000, () => 
console.log("Servidor conrriendo en el puerto 3000"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});