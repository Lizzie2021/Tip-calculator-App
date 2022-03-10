import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import InputArea from "./InputArea";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";

function App() {
  const [total, setTotal] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [result, setResult] = useState("");
  const [isPeople0, setIsPeople0] = useState(false);
  function handleInput(event) {
    const { name, value } = event.target;
    if (name === "totalBill") {
      setTotal(value);
    } else if (name === "tip") {
      setTip(value);
    }
  }
  function handlePeople(event) {
    if (event.target.value !== "0") {
      setPeople(event.target.value);
      setIsPeople0(false);
    } else {
      setIsPeople0(true);
    }
  }

  function handleClick() {
    const cal = (Number(total) + Number(tip)) / Number(people);
    setResult((Math.round(cal * 100) / 100).toFixed(2));
    setTotal("");
    setTip("");
    setPeople("");
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="form">
          <p>What was the total bill?</p>
          <InputArea
            name="totalBill"
            enter={handleInput}
            placeholder="total bill"
            value={total}
          />
          <p>How much tip would you like to give?</p>
          <InputArea
            name="tip"
            enter={handleInput}
            placeholder="tips"
            value={tip}
          />
          <p>How many people to split the bill?</p>
          <InputArea
            name="people"
            enter={handlePeople}
            placeholder="number of people"
            value={people}
          />
          <button onClick={handleClick}>
            <span>
              <KeyboardReturnIcon />
            </span>
          </button>
        </div>
        <div className="result">
          {isPeople0 ? (
            <h1>People can't be zero, please try again!</h1>
          ) : (
            <h1>Each person should pay : $ {result}</h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
