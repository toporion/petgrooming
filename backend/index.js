const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
require('./config/db')
const userRoute = require('./routes/UserRoute')
const port = process.env.PORT || 8080


app.use(cors())
app.use(express.json())
app.use('/api',userRoute)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
