const { author, add, multiply, divide } = require('./index.js')

describe('Test cases', () => {
    test('Author name should be correct', () => {
        expect(author).toEqual('Nilesh Patel')
    })

    test('add', ()=>{
        expect(add(1,2)).toEqual(3)
    })
    test('multiply', ()=>{
        expect(multiply(3,2)).toEqual(6)
    })
    test('divide', ()=>{
        expect(divide(4,2)).toEqual(2)
    })
})