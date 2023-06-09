//integration test
'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Server', () => {
  it('handles the root path',
    async ()=> {
      const response = await mockRequest.get('/');
      expect(response.status).toBe(200);
      expect(response.text).toBeTruthy;
      expect(response.text).toBe('proof of life');
    });
});


test('handles success route', async () => {
  const response = await mockRequest.get('/success');

  expect(response.status).toEqual(200);
  expect(response.text).toEqual('Success!!');

});

test('handles bad requests', async () => {
  const response = await mockRequest.get('/bad');
  console.log(response.body);
  expect(response.status).toBe(500);
  expect(response.body.route).toBe('/bad');
}   );




test('handles not found', async () => {
  const response = await mockRequest.get('/notfound');
  expect(response.status).toBe(404);
}   );

//TDD goal: write a test that returns a 404 on a bad method
test('handles bad method', async () => {
  const response = await mockRequest.post('/person');
  expect(response.status).toBe(404);
}   );

//TDD goal: write a test that proves that the /person route works with a name query string parameter
test('handles person route', async () => {
  const response = await mockRequest.get('/person?name=John');
  expect(response.status).toBe(200);
  expect(response.body.name).toEqual('John');

});
