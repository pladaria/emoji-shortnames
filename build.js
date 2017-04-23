const {readFileSync, writeFileSync} = require('fs');
const {join} = require('path');

const data = require('./data.json');

const json = Object.keys(data).reduce((res, key) => {
    const {category, shortname} = data[key];
    res[category] = res[category] || [];
    res[category].push(shortname);
    return res;
}, {});

writeFileSync(join(__dirname, './emoji-shortnames.json'), JSON.stringify(json, null, '  '));
writeFileSync(join(__dirname, './index.js'), 'module.exports = ' + JSON.stringify(json, null, '  ') + ';');
