/**
 * @file just importing pug files
 */
/*
const req = require.context('../pug/mockup/', false, /\.pug/);
req.keys().forEach((fileName) => {
  req(fileName);
});
*/

function requireAll(file) { file.keys().filter(file => file.forEach(file)) }
requireAll(require.context('../pug', false, /\.pug$/));
