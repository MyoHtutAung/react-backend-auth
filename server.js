require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

//Middleware
app.use(cors())
app.use(express.json()) 

//MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then( () => console.log('MongoDB Connected'))
    .catch((err) => console.error('MongoDB Connection Error:' , err) )

app.get('/', (req, res) => {
    res.send('API is working')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})