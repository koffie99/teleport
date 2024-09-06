// imports
const express = require("express")
const app = express()
const path = require("path")
const morgan = require("morgan")
const dotenv = require("dotenv")

// route import
const teleportRoute = require("./routes/teleport")

// configs
app.use(morgan("dev"))
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
dotenv.config()

// port
const PORT = process.env.PORT || 1100

// route init

app.use("/", teleportRoute)

// init
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
