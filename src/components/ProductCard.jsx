import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-2 text-lg font-medium">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
      <p className="text-yellow-500">{'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}</p>
      <button className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
