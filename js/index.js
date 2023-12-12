var qoute = [
  {
    quoteOutput: 'Be yourself; everyone else is already taken.',
    authorOutput: ' Oscar Wilde',
  },
  {
    quoteOutput:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me",
    authorOutput: 'Marilyn Monroe',
  },
  {
    quoteOutput:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    authorOutput: ' Albert Einstein',
  },
  {
    quoteOutput: 'A room without books is like a body without a soul.',
    authorOutput: 'Marcus Tullius Cicero',
  },
  {
    quoteOutput:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
    authorOutput: ' Bernard M. Baruch',
  },
  {
    quoteOutput:
      "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth",
    authorOutput: ' William W. Purkey',
  },
  {
    quoteOutput: 'You only live once, but if you do it right, once is enough',
    authorOutput: ' Mae West',
  },
];
var quote = document.getElementById('quoteOutput');
var author = document.getElementById('authorOutput');
var random = 0;
var previousRandom = 0;
function randomQute() {
  previousRandom = random;
  randomNumber(qoute.length);
  if (random === previousRandom) {
    randomNumber(qoute.length);
  }
  quote.innerHTML = qoute[random].quoteOutput;
  author.innerHTML = qoute[random].authorOutput;
}
function randomNumber(length) {
  random = Math.floor(Math.random() * length);
}
