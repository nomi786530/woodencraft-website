import React from "react";

const products = [
  {
    id: 1,
    name: "Handmade Wooden Bowl",
    image: "/images/wooden-bowl.jpg",
    price: "$25.00",
    rating: 4.7,
  },
  {
    id: 2,
    name: "Rustic Wooden Candle Holder",
    image: "/images/candle-holder.jpg",
    price: "$18.00",
    rating: 4.3,
  },
  {
    id: 3,
    name: "Decorative Wooden Wall Art",
    image: "/images/wall-art.jpg",
    price: "$45.00",
    rating: 4.9,
  },
];

const TopSellingProducts = () => {
  const handleAddToCart = (product) => {
    alert(`Added "${product.name}" to cart!`);
  };

  // const handleBuyNow = (product) => {
  //   alert(`Proceed to buy "${product.name}"!`);
  // };

  return (
    <section className="py-12 px-4 md:px-12 lg:px-20 bg-[#FAF9F6]">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#5A3A22]">
        Top Selling Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-[#DDD0C8]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-[#8B5E3C]">
                {product.name}
              </h3>
              <p className="text-sm text-[#6B4F3B] mt-1">
                ⭐ {product.rating} / 5
              </p>
              <p className="text-lg text-[#5A3A22] mt-2">{product.price}</p>

              <div className="mt-4 flex justify-center gap-3 flex-wrap">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="px-4 py-2 bg-[#8B5E3C] text-white rounded hover:bg-[#6B4F3B] transition"
                >
                  Add to Cart
                </button>
                {/* <button
                  onClick={() => handleBuyNow(product)}
                  className="px-4 py-2 bg-[#2F4F4F] text-white rounded hover:bg-[#1f3737] transition"
                >
                  Buy Now
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSellingProducts;
