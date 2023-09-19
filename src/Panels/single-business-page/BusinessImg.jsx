import React from "react";

const BusinessImg = ({
  divClassName,
  imgClassName,
  divStyle,
  imgStyle,
  imgSrc,
}) => {
  return (
    <div className={divClassName} style={divStyle}>
      <img className={imgClassName} style={imgStyle} src={imgSrc} />
    </div>
  );
};

export default BusinessImg;
