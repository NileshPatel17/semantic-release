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

export {
    author,
    packageName,
    version,
}