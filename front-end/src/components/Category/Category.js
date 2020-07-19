import React from "react";

import "./Category.css";

class Category extends React.Component {
  render() {
    const { name, description, image } = this.props.info;
    return (
      <div className="category">
        <div className="cat-img">
          <img src={image} alt={name} />
        </div>
        <div className="cat-info">
          <div className="cat-name">{name}</div>
          <br />
          <div className="cat-desc">{description}</div>
        </div>
      </div>
    );
  }
}
export default Category;
