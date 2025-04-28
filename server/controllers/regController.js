const REG = require('../models/Reg');

// Create New Registration
const createRegistration = async (req, res) => {
  try {
    // Auto-generate COMP ID
    const year = new Date().getFullYear().toString().slice(-2); // Last 2 digits of year
    const count = await REG.countDocuments({}); // Count existing records
    const serial = (count + 1).toString().padStart(3, '0'); // 001, 002, 003
    const compId = `${year}11${serial}`; // Format: 2511001

    const reg = new REG({
      compId,
      receivingDate: req.body.receivingDate,
      accountName: req.body.accountName,
      customerName: req.body.customerName,
      orderNumber: req.body.orderNumber,
      productName: req.body.productName,
      mobileNumber: req.body.mobileNumber
    });

    const savedReg = await reg.save();
    res.status(201).json(savedReg);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { createRegistration };