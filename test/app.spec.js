/* eslint-disable strict */
const app = require('../src/app');
const supertest = require('supertest');

describe('App', () => {
  it('GET / responds with 200 containing "Hello Mommies and Daddies"', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello Mommies and Daddies');
  });
});