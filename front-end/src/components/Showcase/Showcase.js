import React from "react";
import PropTypes from "prop-types";

import "./Showcase.css";

const ITEMS_PER_ROW = 4;

function Showcase(props) {
  let groups = [];
  const itemsCopy = props.items.slice();
  const groupsNumber = Math.ceil(itemsCopy.length / ITEMS_PER_ROW);
  for (let i = 0; i < groupsNumber; i++) {
    let itemsGroup = []; // Variable to store a group of ITEMS_PER_ROW items

    /* Calculating how many turns the loop that stores the current elements group has to do based on remaining items  */
    const gOICycles =
      itemsCopy.length < ITEMS_PER_ROW ? itemsCopy.length : ITEMS_PER_ROW;
    for (let j = 0; j < gOICycles; j++) {
      const Product = props.product;
      itemsGroup.push(<Product info={itemsCopy.shift()} key={j} />); // Per each cycle, remove an item.
    }
    let groupClassName = "items-group";
    if (itemsGroup.length < ITEMS_PER_ROW) groupClassName += " not-completed";
    groups.push(
      <div className={groupClassName} key={i}>
        {itemsGroup}
      </div>
    );
  }

  return (
    <div className="showcase">
      {props.title !== undefined && <div className="title">{props.title}</div>}
      {groups}
    </div>
  );
}

Showcase.propTypes = {
  items: PropTypes.array.isRequired,
  product: PropTypes.elementType.isRequired,
  title: PropTypes.string,
};

export default Showcase;
