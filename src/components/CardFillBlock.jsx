import React, { useState } from "react";

const cardInfo = {};

const CardFillBlock = (props) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [ownerName, setOwnerName] = useState("");

  const [cardImg, setCardImg] = useState(
    "https://aladdin.ua/wp-content/uploads/2020/09/mono.png"
  );
  return (
    <div
      className="card-fill"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "fit-content",
      }}
    >
      <div className="card-fill__card">
        <div
          className="card-fill__bank-img"
          style={{ backgroundImage: `url(${cardImg})` }}
        ></div>
        <div className="card-fill__information">
          <span className="card-fill__number">{cardNumber}</span>
          <span className="card-fill__date">{cardDate}</span>
          <div className="card-fill__fullname-cvv">
            <span className="card-fill__fullname">{ownerName}</span>
            <span>{cardCVV}</span>
          </div>
        </div>
      </div>
      <form
        className="card-fill__form"
        onSubmit={(e) => {
          e.preventDefault();
          const cardObj = {
            cardNum: cardNumber,
            cardDate: cardDate,
            cardCVV: cardCVV,
            cardOwner: ownerName,
            cardStatus: "available",
          };
          props.returnData(cardObj);
          setCardCVV("");
          setCardDate("");
          setCardNumber("");
          setOwnerName("");
        }}
      >
        <label>Choose bank</label>
        <select
          onChange={(e) => {
            if (e.target.value == "Monobank") {
              setCardImg(
                `https://aladdin.ua/wp-content/uploads/2020/09/mono.png`
              );
            } else if (e.target.value == "Privat24") {
              setCardImg(
                `https://upload.wikimedia.org/wikipedia/commons/e/e0/Privat24_Logo.png`
              );
            } else if ((e.target.value = "A-bank")) {
              setCardImg(
                `http://v9ky.in.ua/2v_turnir/team_logo/kEOh8Z2oedR.png`
              );
            }
          }}
        >
          <option>Monobank</option>
          <option>Privat24</option>
          <option>A-bank</option>
        </select>
        <label>Name Surname</label>
        <input
          required
          value={ownerName}
          type="text"
          placeholder="Enter name surname"
          onChange={(e) => {
            setOwnerName(e.target.value);
          }}
        />
        <label htmlFor="card-number">Card Number</label>
        <input
          required
          id="card-number"
          placeholder="Enter number"
          value={cardNumber}
          onChange={(e) => {
            setCardNumber(e.target.value);
          }}
        ></input>
        <label htmlFor="card-exp-date">Expiration Date (MM/YY)</label>
        <input
          required
          id="card-exp-date"
          placeholder="Enter date"
          value={cardDate}
          onChange={(e) => {
            setCardDate(e.target.value);
          }}
        ></input>
        <label htmlFor="card-cvv">CVV (4 digits)</label>
        <input
          required
          id="card-cvv"
          placeholder="CVV"
          value={cardCVV}
          onChange={(e) => {
            setCardCVV(e.target.value);
          }}
        ></input>
        <button type="submit" className="card-fill__form-btn">
          Add card
        </button>
      </form>
    </div>
  );
};
export default CardFillBlock;
