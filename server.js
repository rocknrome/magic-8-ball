const express = require('express');
const app = express();

// Array of answers for the main set
const mainAnswers = [
  "The stars align in your favor. Prepare for a wave of awesomeness!",
  "Hmm, the mystical energies are uncertain. Try asking again after you've had a cup of magical tea.",
  "Oh, definitely! The universe is nodding vigorously in agreement.",
  "Alas, the enchanted crystal ball says it's highly likely. Your time is coming now!",
  "Ah, the mystical forces whisper 'Yes!' But don't forget to bring an umbrella, just in case.",
  "Sorry, but the spirits are napping at the moment. Ask again when they've had their cosmic coffee.",
  "Behold! The mystical realm reveals a resounding 'Maybe.' Interpret it as you will, intrepid seeker.",
  "Oh, dear adventurer, the cosmic winds bring tidings of a delightful surprise awaiting you!"
];

// Array of answers for Daffy's set
const daffyAnswers = [
  "Of course, it's obvious! The answer is a grand and glorious 'Yes!'",
  "You're kidding, right? It's a big, fat 'No way, bub!' Move on, pal!",
  "Ha! What a question! The zaniest adventures await you with a wink and a 'You bet!'",
  "Whoa, hold your horses! Fate's got other plans. Don't count on it, doc.",
  "Well, well, well... Look who's in luck! The answer is a splendid 'Absolutely!'",
  "D-d-don't bother, really! This question is a real head-scratcher. Try something else!",
  "Oh boy, oh boy! This one's a winner! The answer is a clear 'Most definitely!'",
  "Dumb and toxic! The answer to your question is a big 'Maybe!' Take it or leave it!"
];

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

// Serve the HTML file for the main set
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Serve the HTML file for Daffy's set
app.get('/daffy', (req, res) => {
  res.sendFile(__dirname + '/daffy.html');
});

// Endpoint to retrieve a random answer for the main set
app.get('/answer', (req, res) => {
  const randomAnswer = mainAnswers[Math.floor(Math.random() * mainAnswers.length)];
  res.json({ answer: randomAnswer });
});

// Endpoint to retrieve a random answer for Daffy's set
app.get('/answer-daffy', (req, res) => {
  const randomAnswer = daffyAnswers[Math.floor(Math.random() * daffyAnswers.length)];
  res.json({ answer: randomAnswer });
});

// Start the server
app.listen(3000, () => {
  console.log(`
Ah, behold!
The Mystic Server has awakened,
casting its mystical aura upon port 3000.
`);
});
