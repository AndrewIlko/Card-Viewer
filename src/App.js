import React, { useState } from "react";
import CardFillBlock from "./components/CardFillBlock";
import CardField from "./components/CardField";
import CardCard from "./components/CardCard";

import "./styles/style.css";
function App() {
  const [carfolderName, setCardFolderName] = useState("Card Viewer");
  const [inputValue, setInputValue] = useState("");
  const [cardField, setCardField] = useState([]);

  const [titleEditInput, setTitleEditInput] = useState(false);
  const getData = (obj) => {
    setCardField([...cardField, obj]);
  };

  const deleteCard = (num) => {
    let cards = [];
    for (let i in cardField) {
      if (cardField[i].cardNum != num) {
        cards.push(cardField[i]);
      }
    }
    setCardField(cards);
  };

  function addComment(num, comment) {
    for (let i in cardField) {
      if (cardField[i].cardNum == num && comment != "") {
        let editObj = [...cardField];
        editObj[i]?.comments == undefined
          ? (editObj[i].comments = [comment])
          : (editObj[i].comments = [...editObj[i].comments, comment]);
        setCardField(editObj);
      }
    }
  }

  function deleteComment(num, comment) {
    let cards = [...cardField];
    for (let card of cards) {
      if (card.cardNum == num) {
        card.comments = card.comments.filter((el) => el != comment);
      }
    }
    setCardField(cards);
  }
  return (
    <div className="App">
      <div className="card-field__title">
        <div className="card-field__title-text">
          {carfolderName}
          <button
            className="card-field__title-btn"
            onClick={() => {
              setInputValue("");
              setTitleEditInput(!titleEditInput);
            }}
          >
            Edit
          </button>
        </div>
        <div
          className="card-field__title-edit"
          style={{ visibility: titleEditInput ? "visible" : "hidden" }}
        >
          <input
            type="text"
            value={inputValue}
            style={{}}
            className="card-field__title-input"
            placeholder="Enter cardfolder name"
            onChange={(e) => {
              setInputValue(e.target.value);
              setCardFolderName(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setInputValue("");
              setTitleEditInput(!titleEditInput);
            }}
          >
            Change name
          </button>
        </div>
      </div>
      <div className="card-field__wrapper">
        <CardField
          cardInfo={cardField}
          deleteFunc={deleteCard}
          addComment={addComment}
          deleteComment={deleteComment}
        />
        <CardFillBlock returnData={getData} />
      </div>
    </div>
  );
}

export default App;
