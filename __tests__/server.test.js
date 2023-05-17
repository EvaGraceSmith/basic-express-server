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


  test('handles success route', async () => {
    const response = await mockRequest.get('/success');

    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Success!!');

  });

  test('handles bad requests', async () => {
    const response = await mockRequest.get('/bad');
    expect(response.status).toBe(500);
  }   );

  test('handles not found', async () => {
    const response = await mockRequest.get('/notfound');
    expect(response.status).toBe(404);
  }   );

});
