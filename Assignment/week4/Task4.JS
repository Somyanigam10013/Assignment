

// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

// src/pages/Home.js
import { Link } from 'react-router-dom';
const products = [
  { id: 1, name: 'Product A', price: '$50', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product B', price: '$70', image: 'https://via.placeholder.com/150' }
];

function Home() {
  return (
    <div>
      <nav className="p-4 bg-blue-600 text-white">My Store</nav>
      <header className="text-center p-10 bg-gray-200">
        <h1 className="text-3xl font-bold">Welcome to Our Store</h1>
      </header>
      <div className="grid grid-cols-2 gap-4 p-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 text-center">
            <img src={product.image} alt={product.name} className="mx-auto" />
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p>{product.price}</p>
            <Link to={`/product/${product.id}`} className="bg-blue-500 text-white p-2 mt-2 inline-block">View Details</Link>
          </div>
        ))}
      </div>
      <footer className="text-center p-4 bg-gray-800 text-white">© 2024 My Store</footer>
    </div>
  );
}
export default Home;

// src/pages/ProductDetail.js
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold">Product {id} Details</h1>
      <p>More details about the product...</p>
    </div>
  );
}
export default ProductDetail;

// Backend (Express.js Server)
// Install dependencies: npm install express cors body-parser

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
];

app.get('/welcome', (req, res) => {
  res.json({ message: 'Welcome to Express!' });
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.json(newUser);
});

app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (user) {
    Object.assign(user, req.body);
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
