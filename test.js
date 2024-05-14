const chai = require('chai');
const expect = chai.expect;

describe('Basic Test', () => {
    it('should return Hello, World!', () => {
        const result = 'Hello, World!';
        expect(result).to.equal('Hello, World!');
    });
});

