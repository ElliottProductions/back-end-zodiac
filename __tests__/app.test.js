const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { zodiacs } = require('../data/zodiacs');


describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/zodiac should return a list of zodiacs', async () => {
    const response = await request(app).get('/zodiacs');
    const expected = zodiacs.map((sign) => { return { id: sign.id, name: sign.name };
    });

    expect(response.body).toEqual(expected);
  });

  it('/zodiac/:id should return Zodiac detail', async () => {
    const response = await request(app).get('/zodiacs/1');
    const expected = {
      'dates': 'Jan 21 - Feb 19',
      'id': '1',
      'name': 'noquarius',
      'symbol': 'Water Bearer',
    }
  ;
    

    expect(response.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
