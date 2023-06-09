//Checks the query string for a name property
//Sends the request through when valid, forces an error when not

module.exports = (req, res, next) => {
  if (!req.query.name) {
    next('Name parameter is missing');
  }
  else {
    next();
  }
}

