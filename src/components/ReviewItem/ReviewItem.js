import { faDeleteLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const {product, handleRemoveProduct} = props;
  const { img, name, price, shiping, quantity } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-item-details-container">
        <div className="review-item-details">
          <p className="product-name" title={name}>
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </p>
          <p>
            Price: $<span className="orenge-color">{price}</span>
          </p>
          <p>
            {" "}
            <small>Shiping: ${shiping}</small>
          </p>
          <p>
            <small>Quantiy: ${quantity}</small>
          </p>
        </div>
        <div className="delete-container">
          <button onClick={() => handleRemoveProduct(product)} className="delete-btn">
              <FontAwesomeIcon className="delete-icon" icon={faTrash}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
