const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      //Should handle error here. 
      res.status(500).send('Database error');
    } else if (!user) {
      //Handle error when user is not found
      res.status(404).send('User not found');
    } else {
      res.json(user);
    }
  });
});

// ... rest of the Express app code