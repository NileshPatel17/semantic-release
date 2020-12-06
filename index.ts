const { author, name: packageName, version } = require('./package.json')

export function add(a: number, b: number): number {
    return a + b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}
export function divide(a: number, b: number): number {
    return a / b;
}

export function beta(): string {
    return `version: ${version}`
}

export function TitleCase(str: String): String{
    if(!str){
        throw new Error('invalid input')
    }
    return str.split(' ').map(item=> item.slice(0,1).toUpperCase()+item.slice(1)).join(' ')
}

export {
    author,
    packageName,
    version
}