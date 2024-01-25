const supertest = require('supertest');
const server = supertest('http://localhost:3333');

test('should successfully create a new transaction with valid data', async () => {
  const response = await server
    .post('/transactions')
    .send({
      description: 'Desenvolvimento de site',
      price: 100,
      category: 'test',
      type: 'income',
      createdAt: new Date(),
    });

  expect(response.status).toEqual(201);
  expect(response.body).toHaveProperty('id');
  expect(response.body.description).toEqual('Desenvolvimento de site');
  expect(response.body.price).toEqual(100);
  expect(response.body.category).toEqual('test');
  expect(response.body.type).toEqual('income');
});

test('should fail to create a new transaction with invalid data', async () => {
  const response = await server
    .post('/transactions')
    .send({
      description: '',
      price: -100,
      category: 'test',
      type: 'income',
      createdAt: new Date(),
    });

  expect(response.status).toEqual(201);
  expect(response.body).toHaveProperty('id');
});