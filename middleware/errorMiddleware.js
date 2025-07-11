// Error handling middleware
const errorMiddleware = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  };
  
  module.exports = errorMiddleware;
  