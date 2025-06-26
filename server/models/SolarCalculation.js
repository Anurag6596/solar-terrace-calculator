const mongoose = require('mongoose');

const solarCalculationSchema = new mongoose.Schema({
  userInfo: {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    terraceSize: { type: Number, required: true }
  },
  monthlyConsumption: {
    january: { type: Number, required: true },
    february: { type: Number, required: true },
    march: { type: Number, required: true },
    april: { type: Number, required: true },
    may: { type: Number, required: true },
    june: { type: Number, required: true },
    july: { type: Number, required: true },
    august: { type: Number, required: true },
    september: { type: Number, required: true },
    october: { type: Number, required: true },
    november: { type: Number, required: true },
    december: { type: Number, required: true }
  },
  calculationResults: {
    totalAnnualConsumption: { type: Number, required: true },
    averageMonthlyConsumption: { type: Number, required: true },
    recommendedCapacity: { type: Number, required: true },
    maxCapacityByArea: { type: Number, required: true },
    estimatedSavings: { type: Number, required: true },
    panelsRequired: { type: Number, required: true }
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SolarCalculation', solarCalculationSchema);
