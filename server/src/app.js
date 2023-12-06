const express = require("express")
const cors = require("cors")
const routes = require("./routes/routes")

require("dotenv").config()

const app = express()

app.use(express.json())// define que a aplicação funcionára em json
app.use(cors())// define que qualquer endereço de acesso será válido
app.use(routes)// define a rota do servidor

module.exports = app