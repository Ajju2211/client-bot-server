const modules = require('require-dir-all')('./dialog-manager/dir');
let tests={};
let keys = Object.keys(modules);
for(let i=0;i<keys.length;i++){
    Object.assign(tests, modules[keys[i]]);
}
module.exports = tests;
