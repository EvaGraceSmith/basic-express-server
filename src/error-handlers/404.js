// Sends a 404/Not-Found message as the response
// Import this into your server and set it up to be “used” after your other routes

'use strict';

module.exports = (req, res, next) => {
  res.status(404).send({
    error:404,
    route: req.baseUrl,
    message:'not found',
  });
};
