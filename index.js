const { author, name, version } = require('./package.json')

function add(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}
function divide(a,b){
    const ret= a/b;
    return ret;
}

module.exports = {
    author,
    name,
    version,
    add,
    multiply,
    divide,
    TitleCase
}