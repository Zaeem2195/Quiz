import React from "react";
import Button from "./Button";

function Question({ questionTile, chooseHandler, afterSubmit }) {
  const answerOptions = questionTile.options.map((el) => (
    <Button
      option={el}
      key={el.id}
      questionTile={questionTile}
      chooseHandler={chooseHandler}
      afterSubmit={afterSubmit}
    />
  ));

  return (
    <div className="col-12 mb-3" style={{ borderBottom: "2px solid gold" }}>
      <h2 style={style}>{questionTile.question}</h2>
      {answerOptions}
      <hr />
      <hr />
    </div>
  );
}

const style = {
  background: "#7bdbe0",

  color: "#051f35",
  padding: "50px",

  borderRadius: "20px",
  borderShadow: "30px 30px",
};

export default Question;
