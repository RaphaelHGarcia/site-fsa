const express = require('express')
const app = express()

const PORT = 3000

app.use(express.static('public'))
app.use(express.static('views'))
app.get('/', (req, res) => res.render('index.html'))

app.listen(PORT, () => console.log(`Site running on port ${PORT}!`))
