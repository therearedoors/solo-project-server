const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser");

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(bodyParser.json());

const gameRouter = require("./router")

app.use("/game", gameRouter)

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3030;
}
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}/`)
})