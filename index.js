const { author, name, version } = require('./package.json')

function add(a,b){
    return a+b;
}

module.exports = {
    author,
    name,
    version,
    add
}