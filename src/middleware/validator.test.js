'use strict';


//this requires the index file
const validator = require('./validator.js');

//this is a unit test

describe('validator middleware', () => {
  let req = {query: {}};
  let res = {};
  //this is a mock function, it "mocks the next function"
  let next = jest.fn();
  test('throws an error if name is missing', () => {
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith('Name parameter is missing');
  });
});




