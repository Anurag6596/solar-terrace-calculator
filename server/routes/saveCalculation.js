const express = require('express');
const router = express.Router();
const SolarCalculation = require('../models/SolarCalculation');

router.post('/', async (req, res) => {
  try {
    const { userInfo, monthlyConsumption, totalAnnualConsumption, averageMonthlyConsumption, recommendedCapacity, maxCapacityByArea, estimatedSavings, panelsRequired } = req.body;

    // Prepare the document as per schema
    const calculation = new SolarCalculation({
      userInfo: {
        name: userInfo.name,
        mobile: userInfo.mobile,
        terraceSize: Number(userInfo.terraceSize)
      },
      monthlyConsumption: Object.fromEntries(
        Object.entries(monthlyConsumption).map(([k, v]) => [k, Number(v)])
      ),
      calculationResults: {
        totalAnnualConsumption,
        averageMonthlyConsumption,
        recommendedCapacity,
        maxCapacityByArea,
        estimatedSavings,
        panelsRequired
      }
    });

    await calculation.save();
    res.status(201).json({ message: 'Calculation saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save calculation' });
  }
});

module.exports = router;