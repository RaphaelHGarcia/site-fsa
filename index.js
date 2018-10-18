const express = require('express')
const app = express()
const fs = require('fs')
// const bodyParser = require('body-parser')
// const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync')

// const adapter = new FileSync('db.json')
// const db = low(adapter)


const PORT = 3000

const subs = require('./db.json')

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))
app.use(express.static('views'))

app.get('/', (req, res) => res.render('index.html'))
app.get('/subs', (req, res) => {
  fs.readFile('subs.txt', 'utf8', function(err, data) {
    if (err) throw err
    return res.send(data)
  })
})
app.post('/', (req, res) => {
  fs.appendFileSync('subs.txt', `${req.body.name};${req.body.email}` + '\n')
  res.redirect('/?=success#')
})

app.listen(PORT, () => console.log(`Site running on port ${PORT}!`))
