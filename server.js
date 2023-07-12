const express = require('express');
const app = express();

// Array of answers
const answers = [
  "The stars align in your favor. Prepare for a wave of awesomeness!",
  "Hmm, the mystical energies are uncertain. Try asking again after you've had a cup of magical tea.",
  "Oh, definitely! The universe is nodding vigorously in agreement.",
  "Alas, the enchanted crystal ball says it's highly likely. Your time is coming now!",
  "Ah, the mystical forces whisper 'Yes!' But don't forget to bring an umbrella, just in case.",
  "Sorry, but the spirits are napping at the moment. Ask again when they've had their cosmic coffee.",
  "Behold! The mystical realm reveals a resounding 'Maybe.' Interpret it as you will, intrepid seeker.",
  "Oh, dear adventurer, the cosmic winds bring tidings of a delightful surprise awaiting you!"
];

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

// Serve the HTML file for the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Endpoint to retrieve a random answer
app.get('/answer', (req, res) => {
  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  res.json({ answer: randomAnswer });
});

// Start the server
app.listen(3001, () => {
  console.log('Ah, behold! The Mystic Server has awakened, casting its mystical aura upon port 3001. Let its enchanting powers guide the way to wondrous experiences and magical encounters.');
});
