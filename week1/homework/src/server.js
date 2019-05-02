'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer(port) {
  let state = 10;

  const server = http.createServer((request, response) => {
    // TODO: Write your homework code here
    let result = 10;
    let reset = 10;
    if (req.url === '/') {
      res.write('Hello les gars');
      res.end();
    } else if (req.url === '/Node_Mosh/first-app') {
      res.write(JSON.stringify([1, 2, 3]));
      res.end();
    } else if (req.url === '/state') {
      res.write(JSON.stringify({ state: result }));
      res.end();
    } else if (req.url === '/add') {
      res.write(JSON.stringify({ state: result++ }));
      res.end();
    } else if (req.url === '/subtract') {
      res.write(JSON.stringify({ state: result-- }));
      res.end();
    } else if (req.url === '/reset') {
      res.write(JSON.stringify({ state: reset }));
      res.end();
    } else {
      res.write(JSON.stringify({ error: 'Not found anywhere' }));
      res.end();
    }
    // end TODO
  });

  return server;
}

module.exports = {
  createServer,
};
