require('dotenv').config()
const express = require('express')
const massive = require('massive')
const hc = require('./controller')

const app = express()
const {SERVER_PORT, DB_STRING} = process.env

app.use(express.json())
massive(DB_STRING).then(db => {
    app.set('db', db)
    console.log('Connected to DB')
})

app.get('/api/houses', hc.read)
app.post('/api/houses', hc.create)
app.delete('/api/houses/:id', hc.delete)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))