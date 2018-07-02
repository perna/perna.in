'use strict'

const mongoose = require('mongoose')
require('mongoose-type-url')

const { Schema } = mongoose

const LinkSchema = new Schema(
  {
    originalUrl: {
      type: mongoose.SchemaTypes.Url,
      required: true
    },
    shortUrl: {
      type: String,
      required: true,
      index: true
    },
    clicks: {type: Number}
  },
  { timestamps: true },
  { collection: 'links' }
)

const CounterSchema = new Schema(
  {
    counter: { type: Number }
  },
  { collection: 'counter' }
)

const Link = mongoose.model('Link', LinkSchema)
const Counter = mongoose.model('Counter', CounterSchema)

module.exports = Link
module.exports = Counter
