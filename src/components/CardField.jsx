import React, { useState } from "react";
import CardCard from "./CardCard";

const CardField = (props) => {
  const cardToDisplay = props.cardInfo.map((obj) => {
    return (
      <>
        <CardCard
          deleteFunc={props.deleteFunc}
          addComment={props.addComment}
          deleteComment={props.deleteComment}
          cardInfo={obj}
        />
      </>
    );
  });
  return (
    <div className="card-field__block" key={999}>
      <div className="card-field__content">{cardToDisplay}</div>
    </div>
  );
};
export default CardField;
