import React from "react";

const Badge = (props) => {
  document.title = "Grit & Grace -" + props.title;
  return <div className="badge">{props.children}</div>;
};

export default Badge;
