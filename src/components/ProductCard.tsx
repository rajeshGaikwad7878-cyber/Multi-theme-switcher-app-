import React from 'react';

interface ProductProps {
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductProps> = ({ title, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
