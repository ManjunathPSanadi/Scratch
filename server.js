const express = require('express');
const bodyParser = require('body-parser');
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client('854209155432-s5dcc0kqc18m3ngidmsc7fpjdcvvasjc.apps.googleusercontent.com');

const app = express();
app.use(bodyParser.json());

app.post('/api/verify-token', async (req, res) => {
  const token = req.body.token;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: '854209155432-s5dcc0kqc18m3ngidmsc7fpjdcvvasjc.apps.googleusercontent.com',
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    
    // Save the user information in your database
    // For example, you could save the user ID and email:
    const user = {
      id: userid,
      email: payload

