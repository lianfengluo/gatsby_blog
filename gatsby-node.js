require('source-map-support').install();
require('ts-node').register();
const path = require(`path`);

exports.createPages = path.resolve(__dirname, './gatsby-node.ts');
