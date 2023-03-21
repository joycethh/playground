import React from "react";

const Container = ({ leftContent, rightContent }) => {
  return (
    <div className="flex-container">
      <div className="left">{leftContent}</div>
      <div className="right">{rightContent}</div>
    </div>
  );
};

export default Container;
