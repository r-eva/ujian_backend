let express = require('express')
let bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 1997

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send('<h1>Ini Home Page</h1>')
})

const { kategoriRouter, movieRouter, connectionRouter } = require('./routers')

app.use('/kategori', kategoriRouter)
app.use('/movie', movieRouter)
app.use('/connection', connectionRouter)

app.listen(port, () => console.log(`API aktif di port ${port}`))



