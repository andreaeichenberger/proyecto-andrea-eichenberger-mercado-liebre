// Importando los módulos necesarios: express y path.
const express = require("express");
const app = express();
const path = require("path");

// Definiendo la ruta de mi carpeta estática.
app.use(express.static(path.resolve(__dirname,"./public")));

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => 
console.log("Server start"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});