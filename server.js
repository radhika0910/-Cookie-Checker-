const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();

// Configure session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Connect to your MongoDB database using Mongoose
mongoose.connect('mongodb+srv://demo:Radhika123456@3dviewer.fs33ycy.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a Mongoose schema and model for the cookies collection
const cookieSchema = new mongoose.Schema({
  name: String,
  value: String
});

const Cookie = mongoose.model('Cookie', cookieSchema);

// Route to check and create the dynamic cookie if not present
app.get('/check-cookie', async (req, res) => {
  const dynamicCookieName = req.session.dynamicCookieName;

  try {
    // Fetch the cookie from the database
    const cookie = await Cookie.findOne({ name: dynamicCookieName });

    if (cookie) {
      // Cookie is present, return true
      res.json({ cookiePresent: true });
    } else {
      // Cookie is not present, create the cookie dynamically
      const newCookie = new Cookie({ name: dynamicCookieName, value: 'cookie-value' });
      await newCookie.save();
      res.json({ cookiePresent: false, createdCookie: true });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching or creating cookie in the database' });
  }
});

// Route to delete the dynamic cookie
app.get('/delete-cookie', async (req, res) => {
  const dynamicCookieName = req.session.dynamicCookieName;

  try {
    // Delete the cookie from the database
    await Cookie.deleteOne({ name: dynamicCookieName });

    res.json({ cookieDeleted: true });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting cookie from the database' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
