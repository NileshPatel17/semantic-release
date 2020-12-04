const { author, name, version } = require('./package.json')

function add(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function beta(){
    return `version: ${version}`
}

module.exports = {
    author,
    name,
    version,
    add,
    multiply,
    divide,
    beta
}