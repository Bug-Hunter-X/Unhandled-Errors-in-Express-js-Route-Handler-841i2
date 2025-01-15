const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error('Database error:', err); // Log the error for debugging
      res.status(500).send('Database error');
    } else if (!user) {
      res.status(404).send('User not found');
    } else {
      res.json(user);
    }
  });
});

//Improved error handling using async/await
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await db.getUser(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Server Error');
  }
});