const mongoose = require('mongoose')

const MountainModel = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  summit: {
    type: Number,
    required: true
  },
  quota: {
    type: Number,
    required: true
  },
  mountainType: {
    type: String,
    enum: ['berapi', 'tidak']
  },
  address: {
    type: String,
    required: true
  },
  images: [{
    type: String
  }],
  price: {
    type: Number
  },
  easiestRoute: {
    type: String
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
}, {
    timestamps: true
})

module.exports = mongoose.model('Mountains', MountainModel)
