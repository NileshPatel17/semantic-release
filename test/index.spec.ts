import { author, add, multiply, divide, TitleCase } from '../index'

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
    test('TitleCase', ()=>{
        expect(TitleCase('nilesh patel')).toEqual('Nilesh Patel')
        expect(TitleCase('nilesh')).toEqual('Nilesh')
    })
})