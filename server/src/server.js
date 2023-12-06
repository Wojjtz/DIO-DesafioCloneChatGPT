const app = require("./app")
const port = process.env.PORT || 3000 //os "||" serve para que se não for encontrado nenhuma porta no arquivo env.PORT será usado a porta 3000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})