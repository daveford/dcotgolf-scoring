const queries = require('../db/queries.js');

async function getSeasons(){
    return await queries.getSeasons();
}

module.exports = {
    getSeasons
}