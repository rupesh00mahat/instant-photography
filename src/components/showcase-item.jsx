import React from "react";

function ShowcaseItem({image, firstText, secondText}) {
  return (
    <div className="showcase-item">
      <img src={image} loading="lazy"/>
      <div className="showcase-item-content">
        <div className="divider-lg"> </div>
        <h2>
          {firstText} <br /> {secondText}
        </h2>
        <div className="divider-lg"> </div>
      </div>
    </div>
  );
}

export default ShowcaseItem;
