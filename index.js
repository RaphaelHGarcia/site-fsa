const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

const PORT = 3000

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))
app.use(express.static('views'))

app.get('/', (req, res) => res.render('index.html'))
app.post('/', (req, res) => {
  db.get('subscribers')
    .push({ name: req.body.name, email: req.body.email })
    .write()

    res.redirect('/?=success')
})

app.listen(PORT, () => console.log(`Site running on port ${PORT}!`))
