const express = require("express");

const config = require("../config.js");
const user = require("./components/user/network.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use("/api/user", user);

app.listen(config.api.port, () => {
    console.log("Escuchando en el puerto", config.api.port)
});