const quotes = [
  {
    quote: '“Good ideas are always crazy until they’re not.”',
    author: 'Larry Page',
  },
  {
    quote:
      "“Let us make our future now, and let us make our dreams tomorrow's reality.”",
    author: 'Malala Yousafzai',
  },
  {
    quote: '“Dreams are made possible if you try.”',
    author: 'Terry Fox',
  },
  {
    quote: "“If you lose, don't lose the lesson.”",
    author: 'Dalai Lama',
  },
  {
    quote: '“Have patience. All things are difficult before they become easy.”',
    author: 'Saadi',
  },
  {
    quote: '“What a person can be, they must be.”',
    author: 'Abraham Maslow',
  },
  {
    quote: "“Make sure your worst enemy doesn't live between your two ears.”",
    author: 'Laird Hamilton',
  },
  {
    quote: '“Launch and learn. Everything is progress.”',
    author: 'Danielle LaPorte',
  },
  {
    quote:
      '“Life is simple. Are you happy? Yes? Keep going. No? Change something.”',
    author: 'Unknown',
  },
  {
    quote:
      '“Choose a job you love and you will never have to work a day of your life.”',
    author: 'Unknown',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const randomIndex = Math.floor(Math.random() * quotes.length);

const todayQuote = quotes[randomIndex];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
