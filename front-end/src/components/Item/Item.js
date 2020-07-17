import React from "react";
import PropTypes from "prop-types";

import "./Item.css";

function Item(props) {
  const { desc, img, price, offer, sold, shipping } = props.info;
  const offerPrice = (price * offer) / 100;

  function handleItemClik() {
    if (props.onClick) props.onClick();
  }

  return (
    <div className="item" onClick={handleItemClik}>
      <div className="item-pic">
        <img src={img} alt={desc} />
      </div>
      <div className="item-info">
        <div className="description">{desc}</div>
        <div className="price">
          USD $
          {offer
            ? (Math.round((price - offerPrice) * 100) / 100).toFixed(2)
            : price.toFixed(2)}
          {offer > 0 && (
            <div className="prev-price">
              <div className="amount">USD ${price.toFixed(2)}</div>
              <div className="offer-p">-{offer}%</div>
            </div>
          )}
        </div>
        <div className="last-info">
          <div className="sold">Vendidos: {sold}</div>
          <div className="shipping">
            Envío{shipping ? `: $${shipping}` : " gratis"}
          </div>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  info: PropTypes.shape({
    desc: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    offer: PropTypes.number,
    sold: PropTypes.number,
    shipping: PropTypes.number,
    score: PropTypes.number,
  }),
  onClick: PropTypes.func,
};

export default Item;
