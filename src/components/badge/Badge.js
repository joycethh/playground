import React from "react";

const Badge = (props) => {
  document.title = "Seashell -" + props.title;
  return <div className="badge">{props.children}</div>;
};

export default Badge;
