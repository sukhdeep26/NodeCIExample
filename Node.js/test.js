const assert = require('assert');
const app = require('./app');

describe('App', () => {
  it('should return "Hello, world!"', () => {
    assert.strictEqual(app(), 'Hello, world!\n');
  });
});

