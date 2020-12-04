const { author, add } = require('./index.js')

describe('Test cases', () => {
    test('Author name should be correct', () => {
        expect(author).toEqual('Nilesh Patel')
    })

    test('add', ()=>{
        expect(add(1,2)).toEqual(3)
    })
})