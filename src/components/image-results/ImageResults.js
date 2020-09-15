import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ImageResults.css";

class ImageResults extends Component {
  render() {
    const { images } = this.props;

    return (
      <div className="grid-container">
        {images.map((img) => (
          <div className="grid-item">
            <a href={img.largeImageURL} target="_blank">
              <img width="300" height="169" src={img.webformatURL} alt="" />
            </a>
          </div>
        ))}
      </div>
    );
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageResults;
