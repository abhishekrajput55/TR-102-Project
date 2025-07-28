// App.jsx
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul>
        {products.map(p => (
          <li key={p._id}>{p.name} - ₹{p.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
