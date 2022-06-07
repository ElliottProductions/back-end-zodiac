const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { zodiacs } = require('../data/zodiacs');


describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/zodaics should return a list of zodiacs', async () => {
    const response = await request(app).get('/zodiacs');
    const expected = zodiacs.map((sign) => { return { id: sign.id, name: sign.name };
    });

    expect(response.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
