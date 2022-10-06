import React, { useState } from "react";

const CardCard = (props) => {
  const [comment, setComment] = useState("");
  const [cardStatusBtn, setCardStatusBtn] = useState(true);
  const {
    cardInfo: { cardNum, cardDate, cardCVV, cardOwner, cardStatus },
    deleteFunc,
    addComment,
    deleteComment,
  } = props;

  return (
    <div className="card" key={cardNum}>
      <div className="card-information">
        <span className="card-information__text">{cardNum}</span>
        <span className="card-information__text">{cardDate}</span>
        <span className="card-information__text">{cardCVV}</span>
        <span className="card-information__text">{cardOwner}</span>
        <button
          className="card__delete-btn"
          onClick={() => {
            deleteFunc(cardNum);
          }}
        >
          <i class="material-icons">delete</i>
        </button>
      </div>
      <div className="card-additional-information">
        <button
          className="card-btn"
          style={{ backgroundColor: cardStatusBtn ? "green" : "red" }}
          onClick={() => {
            setCardStatusBtn(!cardStatusBtn);
          }}
        >
          {cardStatusBtn ? "available" : "disable"}
        </button>
        <ul className="card-comments">
          {props.cardInfo?.comments &&
            props.cardInfo.comments.map((element) => {
              return (
                <li key={element}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    {element}
                    <button
                      style={{
                        backgroundColor: "transparent",
                        fontWeight: "700",
                        color: "rgb(255, 255, 255, 0.2)",
                        border: "none",
                        fontSize: "16px",
                      }}
                      onClick={() => {
                        deleteComment(cardNum, element);
                      }}
                    >
                      <i class="material-icons">delete</i>
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
        <form
          className="card-add-comment"
          onSubmit={(e) => {
            e.preventDefault();
            addComment(cardNum, comment);
            setComment("");
          }}
        >
          <input
            className="card-comment__input"
            type="text"
            value={comment}
            placeholder="Enter comment"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <button className="card-comment__btn" type="submit">
            <i class="material-icons">add</i>
          </button>
        </form>
      </div>
    </div>
  );
};
export default CardCard;
