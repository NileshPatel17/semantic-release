const { author } = require('./index.js')

describe('Test cases', () => {
    test('Author name should be correct', () => {
        expect(author).toEqual('Nilesh Patel')
    })
})