// Tax calculator utility functions
const taxCalculator = {
    calculateTax: (item) => {
      let tax = 0;
      if (item.price > 1000 && item.price <= 5000) {
        tax = item.price * 0.12;
      } else if (item.price > 5000) {
        tax = item.price * 0.18;
      }
      return tax;
    },
  };
  
  module.exports = taxCalculator;
  