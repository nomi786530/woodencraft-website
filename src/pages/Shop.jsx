import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const allProducts = [
  { id: 1, name: 'Premium Wooden Chair', category: 'Chairs', image: '/images/wooden-chair.jpg', price: 150, rating: 4.5 },
  { id: 2, name: 'Elegant Coffee Table', category: 'Tables', image: '/images/cofee-table.jpg', price: 220, rating: 4.2 },
  { id: 3, name: 'Rustic Bookshelf', category: 'Cabinets', image: '/images/wooden-shelf.jpg', price: 180, rating: 4.7 },
  { id: 4, name: 'Minimal Desk', category: 'Tables', image: '/images/wooden-desk.jpg', price: 199, rating: 4.3 },
  { id: 5, name: 'Classic Bed Frame', category: 'Beds', image: '/images/bed-frame.jpg', price: 500, rating: 4.8 },
  { id: 6, name: 'Wooden Cabinet', category: 'Cabinets', image: '/images/wood-cabinet.jpg', price: 260, rating: 4.4 },
];

const categories = ['All', 'Chairs', 'Tables', 'Beds', 'Cabinets'];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('');
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const filterProducts = () => {
    let filtered = selectedCategory === 'All'
      ? [...allProducts]
      : allProducts.filter(p => p.category === selectedCategory);

    switch (sortOption) {
      case 'lowToHigh':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'highToLow':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'alpha':
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      case 'rating':
        return [...filtered].sort((a, b) => b.rating - a.rating);
      default:
        return filtered;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <div className="w-full md:w-1/4">
        <h2 className="text-xl text-[#5A3A22] font-bold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer px-3 py-2 rounded ${selectedCategory === cat ? 'bg-[#8c6239] text-white' : 'hover:bg-gray-100'}`}
            >
              {cat}
            </li>
          ))}
        </ul>

        {/* Sorting */}
        <div className="mt-8">
          <label htmlFor="sort" className="block mb-2 text-[#5A3A22] font-semibold">Sort By</label>
          <select
            id="sort"
            className="w-full border border-gray-300 px-3 py-2 rounded"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
            <option value="alpha">Alphabetical Order</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Products */}
      <div className="w-full md:w-3/4">
        <h2 className="text-2xl text-[#5A3A22] font-bold mb-6">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterProducts().map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>

                <div className="flex justify-between items-center mt-2">
                  <p className="text-base font-semibold text-green-600">${product.price}</p>
                  <div className="flex items-center text-yellow-500">
                    <span className="text-sm">★</span>
                    <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 w-full bg-[#8c6239] hover:bg-amber-700 text-white py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
