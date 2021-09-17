import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@mui/icons-material/Star";
function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <div className="checkout-product">
      <img src={image} alt="" className="checkout-product__image" />
      <div className="checkout-product__info">
        <p className="checkout-product__title">{title}</p>
        <p className="checkout-product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="product__ratingIcon" />
            ))}
        </div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
