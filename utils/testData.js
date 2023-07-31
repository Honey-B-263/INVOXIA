// Test data generator utility functions
const testData = {
    generateTestProducts: () => {
      const products = [
        { name: 'Product A', price: 1500, category: 'Category X' },
        { name: 'Product B', price: 3000, category: 'Category Y' },
        { name: 'Product C', price: 6000, category: 'Category Z' },
      ];
      return products;
    },
  
    generateTestServices: () => {
      const services = [
        { name: 'Service X', price: 2000, category: 'Category A' },
        { name: 'Service Y', price: 5000, category: 'Category B' },
        { name: 'Service Z', price: 10000, category: 'Category C' },
      ];
      return services;
    },
  };
  
  module.exports = testData;
  