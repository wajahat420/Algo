const express = require('express');
const app = express();
// require('./Turing test binary')
// require('./Merge-Sort')
// require('./Quick-Sort')
// require('./Binary-Search')
// require('./Arrays/Sliding-Window')
// require('./Linked-list/doubly')  
// require('./Linked-list/singly')
// require('./Linked-list/circular-singly')
// require('./Linked-list/floyd-tortoise-N-hare-algo')
// require('./Linked-list/BT')
// require('./Algo/Digkstra')
// require('./Graph')
require('./Tries')

// Example route
app.get('/api/example', responseMiddleware, (req, res) => {
  res.send({ message: 'Hello, world!' });
});

// Start the server
app.listen(3000, () => {
  console.log(`Server is running on PORT ${3000}`);
});


function responseMiddleware(req, res, next) {
  // Store the original send method
  const originalSend = res.send;

  // Override the res.send method
  res.send = function (body) {
    // Perform your operations before sending the response
    console.log('Response body:', body);
    body.structure = {
      a: 1,
      b: 2
    }
    // Optionally modify the response body here

    // Call the original send method to send the response
    return originalSend.call(this, body);
  };

  // Pass control to the next middleware or route handler
  next();
}
