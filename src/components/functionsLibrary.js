function getLangs() {
    const languages = require('./languages.json');
    return languages;
}

module.exports = { 
    getLangs,
}
