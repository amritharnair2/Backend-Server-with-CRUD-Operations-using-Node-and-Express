const express = require("express")

const userRoutes = require("./routes/userRoutes")

const app = express()

app.use(express.json())  //middleware

app.use((req, res, next) => {
    console.log("app.use hitted")
    next()
})

app.use("/user", userRoutes)

app.listen(4000, () => {
    console.log("port starts at port 4000")
})
