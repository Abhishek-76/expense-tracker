import React from "react";
import "./Card.css";

const Card = (props) => {
  //function
  const classes = "card " + props.className; //Space also impportant in 'card '
  return <div className={classes}>{props.children}</div>;
};
export default Card;
