const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let quotes = [
    { id: 1, text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { id: 2, text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
    { id: 3, text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { id: 4, text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { id: 5, text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { id: 6, text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { id: 7, text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Anonymous" },
    { id: 8, text: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
    { id: 9, text: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
    { id: 10, text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { id: 11, text: "If you can dream it, you can do it.", author: "Walt Disney" },
    { id: 12, text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { id: 13, text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { id: 14, text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { id: 15, text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { id: 16, text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { id: 17, text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { id: 18, text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
    { id: 19, text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { id: 20, text: "You learn more from failure than from success. Don’t let it stop you. Failure builds character.", author: "Anonymous" },
    { id: 21, text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { id: 22, text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { id: 23, text: "Do what you can with all you have, wherever you are.", author: "Theodore Roosevelt" },
    { id: 24, text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { id: 25, text: "The best way to predict the future is to create it.", author: "Abraham Lincoln" },
    { id: 26, text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { id: 27, text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { id: 28, text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { id: 29, text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { id: 30, text: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
    { id: 31, text: "If you want to go fast, go alone. If you want to go far, go together.", author: "African Proverb" },
    { id: 32, text: "Success is not the absence of failure; it’s the persistence through failure.", author: "Aisha Tyler" },
    { id: 33, text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
    { id: 34, text: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    { id: 35, text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { id: 36, text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { id: 37, text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { id: 38, text: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { id: 39, text: "It is hard to fail, but it is worse never to have tried to succeed.", author: "Theodore Roosevelt" },
    { id: 40, text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { id: 41, text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { id: 42, text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { id: 43, text: "Our lives are defined by opportunities, even the ones we miss.", author: "F. Scott Fitzgerald" },
    { id: 44, text: "To live a creative life, we must lose our fear of being wrong.", author: "Joseph Chilton Pearce" },
    { id: 45, text: "The mind is everything. What you think you become.", author: "Buddha" },
    { id: 46, text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", author: "George Carlin" },
    { id: 47, text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { id: 48, text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { id: 49, text: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou" },
    { id: 50, text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" }
  ];
  

// Get a random quote
app.get("/quote", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

// Add a new quote
app.post("/quote", (req, res) => {
  const { text, author } = req.body;
  if (!text || !author) {
    return res.status(400).json({ error: "Text and author are required!" });
  }
  const newQuote = { id: quotes.length + 1, text, author };
  quotes.push(newQuote);
  res.json(newQuote);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
