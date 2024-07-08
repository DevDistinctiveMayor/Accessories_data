const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

// Use CORS to allow cross-origin requests
app.use(cors());

// Serve static files from the "images" directory
app.use('/Accessories', express.static(path.join(__dirname, 'Accessories')));

// Serve the index.html file for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Sample data for women's clothing

const accessories = [
  {
    id: 1,
    // title: "Faded Blue Jeans",
    title: "Nepic Classy Unique Design Sophisticated Female Chain Wristwatch + Bracelet/Necklace/Ear-Ring",
    price: '35.000',
    image: '/Accessories/1.png',
    rating: "5 (10)",
    Quantity: 3
  },
  {
    id: 2,
    // title: 'Black Denim',
    title: 'FULLY STONED ZIRCONIA NECKLACE.',
    price: '7.000',
    image: '/Accessories/2.png',
    rating: "5 (12)",
    Quantity: 7
  },
  {
    id: 3,
    // title: 'Design Shirt',
    title:  'Gold Wristwatch💥👌Prefect for casual or occasional use.',
    price: '45.000',
    image: '/Accessories/3.png',
    rating: "4 (11)",
    Quantity: 5
  },
  {
    id: 4,
    // title: 'Short & Top',
    title: 'Very sleek chain Watch. Fit for a casual.',
    price: '32.000',
    image: '/Accessories/4.png',
    rating: "5 (18)",
    Quantity: 10,
  },
  {
    id: 5,
    // title: 'Short',
    title: '3 in 1 Set For Him. Brown Leather watch Brown Leather Bracelet Rose Gold cufflinks.',
    price: '37.000',
    image: '/Accessories/5.png',
    rating: "4 (23)",
    Quantity: 6,
  },
  {
    id: 6,
    // title: 'Blue Jean',
    title: 'Sleek sliver wristwatch. Fit for a casual.',
    price: '36.000',
    image: '/Accessories/6.png',
    rating: "5 (20)",
    Quantity: 5,
  },
  {
    id: 7,
    // title: 'Round Neck ',
    title: 'Best fashion watch. Prefect for casual or occasional us.',
    price: '27.000',
    image: '/Accessories/20.png',
    rating: "4 (12)",
    Quantity: 11
  },
  {
    id: 8,
    // title: 'Jean',
    title: '3 in 1 set For Male.',
    price: '30.000',
    image: '/Accessories/8.png',
    rating: "5 (15)",
    Quantity: 6
  },
  {
    id: 9,
    // title: 'Trend High Trouser & Shirt',
    title: 'Perfect fit for your wrist.',
    price: '29.000',
    image: '/Accessories/9.png',
    rating: "5 (30)",
    Quantity: 5
  },
  {
    id: 10,
    // title: 'Watch & cufflinks Combination',
    title: 'Watch & cufflinks Combination.',
    price: '27.000',
    image: '/Accessories/10.png',
    rating: "5 (8)",
    Quantity: 5
  },
  {
    id: 11,
    // title: '',
    title: 'Original leather wristwatch.',
    price: '31.000',
    image: '/Accessories/11.png',
    rating: "5 (15)",
    Quantity: 8
  },
  {
    id: 12,
    // title: 'High Quality Pant',
    title: "POEDAGAR Brand Fashionable Waterproof Sports Quartz Men's Watch.",
    price: '30.000',
    image: '/Accessories/12.png',
    rating: "5 (10)",
    Quantity: 9
  },
  {
    id: 13,
    // title: 'Designer Singlet',
    title: 'Original leather wristwatch..',
    price:'32.000',
    image: '/Accessories/13.png',
    rating: "5 (15)",
    Quantity: 11
  },
  {
    id: 14,
    // title: 'Plain Roundneck',
    title: "Women's Diamond Quartz Watch, Stainless Steel Bracelet, 33mm.",
    price: '25.000',
    image: '/Accessories/14.png',
    rating: "5 (10)",
    Quantity: 10
  },
  {
    id: 15,
    // title: 'Casual trouser',
    title: '2 in 1 Wristwatch & Neckpiece Combo .',
    price: '38.600',
    image: '/Accessories/15.png',
    rating: "5 (15)",
    Quantity: 10
  },
  {
    id: 16,
    // title: 'Faded color Jeans',
    title: "Black chain strap watch.",
    price: '22.000',
    image: '/Accessories/16.png',
    rating: "4 (13)",
    Quantity: 11
  },
  {
    id: 17,
    // title: 'Up and Down short',
    title: 'stainless steel 14k gold plated round circle pendant zircon diamond roman numerals necklace for women.',
    price: '8.000',
    image: '/Accessories/19.png',
    rating: "4 (23)",
    Quantity: 6
  },
  {
    id: 18,
    // title: 'Jacket with Roundneck',
    title: "INFINITY STONED NECKLACE .",
    price: '5.000',
    image: '/Accessories/21.png',
    rating: "5 (13)",
    Quantity: 9
  },

];

// Endpoint to get women's clothing
app.get('/api/accessories', (req, res) => {
  res.json(accessories);
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
