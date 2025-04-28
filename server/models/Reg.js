const mongoose = require('mongoose');

const regSchema = new mongoose.Schema({
  compId: {
    type: String,
    required: true,
    unique: true
  },
  receivingDate: {
    type: Date,
    default: Date.now
  },
  accountName: {
    type: String,
    required: true
  },
  customerName: {
    type: String,
    required: true
  },
  orderNumber: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "UNDER PROCESS"
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('REG', regSchema);