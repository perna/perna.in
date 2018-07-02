const mongoose = require('mongoose')
const config = require('../config/config')

const {db: {host, port, name}} = config
const connectionString = `mongodb://${host}:${port}/${name}`

mongoose.connect(connectionString)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('mongodb connected')
})

module.exports = mongoose
