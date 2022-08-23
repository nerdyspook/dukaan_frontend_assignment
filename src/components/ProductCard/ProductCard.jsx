import "./ProductCard.css";

const ProductCard = ({ image, title, details }) => {
  return (
    <div className="product_card">
      <img src={image} alt="privacy generator" />
      <h4 className="heading">Privacy Policy Generator</h4>
      <p>{details}</p>
    </div>
  );
};

export default ProductCard;
