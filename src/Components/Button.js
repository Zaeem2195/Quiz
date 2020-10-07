import React from "react";

function Button({ option, questionTile, chooseHandler, afterSubmit }) {
  const style = {
    margin: "5px",
    padding: "5px",
    width: "400px",
    color: "#2F4F4F",
    fontSize: "15px",
    borderRadius: "20px",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: "30px",
  };

  if (option.state === true) {
    style.background = "orange";
    style.color = "white";
  }
  if (
    afterSubmit === true &&
    option.op === questionTile.options[questionTile.cOption].op
  ) {
    style.background = "green";
    style.color = "white";
  }
  if (
    option.state === true &&
    afterSubmit === true &&
    option.op !== questionTile.options[questionTile.cOption].op
  ) {
    style.background = "red";
    style.color = "white";
  }

  return (
    <div>
      <button
        className="dyn-btn"
        style={style}
        onClick={() => {
          chooseHandler(option, questionTile.id);
        }}
      >
        {option.op}
      </button>
    </div>
  );
}

export default Button;
