const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// API Routes
app.get('/api/exchanges', (req, res) => {
  res.json({
    exchanges: [
      { name: 'Binance', status: 'active', pairs: 450 },
      { name: 'Coinbase', status: 'active', pairs: 200 },
      { name: 'Kraken', status: 'active', pairs: 180 },
      { name: 'Uniswap', status: 'active', pairs: 1200 }
    ]
  });
});

app.get('/api/spreads', (req, res) => {
  res.json({
    spreads: [
      { pair: 'BTC/USDT', buy: 'Binance', sell: 'Kraken', spread: 2.5 },
      { pair: 'ETH/USDT', buy: 'Coinbase', sell: 'Binance', spread: 1.8 },
      { pair: 'SOL/USDT', buy: 'Kraken', sell: 'Uniswap', spread: 3.2 }
    ]
  });
});

// Serve React App
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
