import React from "react";
import PropTypes from "prop-types";
import "./Title.css";

class Title extends React.Component {
  render() {
    return (
      <div className="title">
        <div className="t-de">
          <div className="t-de-c"></div>
        </div>
        <div className="txt">{this.props.title}</div>
        <div className="t-de">
          <div className="t-de-c"></div>
        </div>
      </div>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
