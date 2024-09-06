const express = require("express")
const path = require("path")
const router = express.Router()

// route
router.get("/", async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../views/home.html"))
  } catch (err) {
    console.log(err.message)
  }
})

module.exports = router
