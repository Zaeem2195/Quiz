import React, { useState } from "react";
import QuizData from "./QuizData";
import Question from "./Question";
import EditQuestions from "./EditQuestions";

function Quiz() {
  const [Quiz, setQuiz] = useState(QuizData);
  const [score, setScore] = useState(0);
  const [afterSubmit, setAfterSubmit] = useState(false);
  const [editState, setEditState] = useState(false);
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState({});
  const [option2, setOption2] = useState({});
  const [option3, setOption3] = useState({});
  const [option4, setOption4] = useState({});
  const [cOption, setcOption] = useState({});
  const [id, setid] = useState(10);
  const [error, seterror] = useState(false);

  const addQuestionStatement = (e) => {
    setQuestion(e.target.value);
  };
  const addOption1 = (e) => {
    setid(id + 1);
    setOption1({
      id: id + 1,
      op: e.target.value,
      state: "false",
    });
  };

  const addOption2 = (e) => {
    setid(id + 1);
    setOption2({
      id: id + 1,
      op: e.target.value,
      state: "false",
    });
  };
  const addOption3 = (e) => {
    setid(id + 1);
    setOption3({
      id: id + 1,
      op: e.target.value,
      state: "false",
    });
  };
  const addOption4 = (e) => {
    setid(id + 1);
    setOption4({
      id: id + 1,
      op: e.target.value,
      state: "false",
    });
  };
  const setCorrectOption = (e) => {
    setcOption({
      intOp: parseInt(e.target.value),
      op: e.target.value,
    });
  };

  const addQuestionTile = () => {
    const arr = [option1, option2, option3, option4];
    setid(id + 1);
    const questionTile = {
      id: id + 1,
      question: question,
      options: arr,
      cOption: cOption.intOp,
    };

    if (
      option1 === "" ||
      option2 === "" ||
      option3 === "" ||
      option4 === "" ||
      question === "" ||
      cOption.op === ""
    ) {
      seterror(true);
      setTimeout(() => seterror(false), 1000);
    } else {
      setQuiz([...Quiz, questionTile]);
      setQuestion("");
      setcOption({ ...cOption, op: "" });
      setOption4({ ...option4, op: "" });
      setOption2({ ...option2, op: "" });
      setOption3({ ...option3, op: "" });
      setOption1({ ...option1, op: "" });
    }
  };

  const deletemethod = (id) => {
    const arr = Quiz.filter((el) => el.id !== id);
    setQuiz(arr);
  };

  const resetVal = () => {
    const updatedQuiz = Quiz.map((el) => {
      const updatedOptions = el.options.map((option) => {
        option.state = false;
        return option;
      });
      el.options = updatedOptions;
      return el;
    });

    setQuiz(updatedQuiz);
    setScore(0);
    setAfterSubmit(false);
  };

  const scoreCalculate = () => {
    let scores = 0;
    Quiz.forEach((el) => {
      if (el.options[el.cOption].state === true) {
        scores++;
      }
    });
    setScore(scores);
    setAfterSubmit(true);
  };

  const chooseHandler = (option, ID) => {
    const updatedQuiz2 = Quiz.map((el) => {
      if (el.id === ID) {
        el.options.forEach((ele) => {
          if (ele.op === option.op) {
            ele.state = !ele.state;
          } else {
            ele.state = false;
          }
        });
      }
      return el;
    });
    setQuiz(updatedQuiz2);
  };

  const quizOperation = Quiz.map((el) => (
    <Question
      questionTile={el}
      key={el.id}
      chooseHandler={chooseHandler}
      afterSubmit={afterSubmit}
    />
  ));

  const editQuestions = Quiz.map((el) => (
    <EditQuestions data={el} key={el.id} methoddelete={deletemethod} />
  ));

  const edit = () => {
    setEditState(true);
  };
  const exit = () => {
    setEditState(false);
  };

  const style2 = {
    fontSize: "100px",
  };
  if (score <= 0.5 * Quiz.length) {
    style2.color = "red";
  } else {
    style2.color = "green";
  }

  return (
    <main style={{ backgroundColor: "#051f35" }} className="pb-5 pt-3">
      <div className="container">
        <h1
          className="text-center mb-3"
          style={{
            color: "#7bdbe0",
            fontSize: "50px",
          }}
        >
          QUIZ
        </h1>
        <div className="row">
          {!editState && (
            <React.Fragment>
              {quizOperation}
              <div className="col-12">
                {afterSubmit ? (
                  <h1
                    className="w-50 py-5 px-4 mx-auto"
                    style={{
                      background: "#9e8c26",
                      fontSize: "40px",
                      color: "white",
                    }}
                  >
                    Your score is <span style={style2}>{score}</span>/
                    {Quiz.length}
                  </h1>
                ) : (
                  <h1
                    className="w-50 py-5 px-4 mx-auto"
                    style={{
                      background: "#9e8c26",
                      color: "white",
                      fontSize: "40px",
                    }}
                  >
                    click submit to see your result
                  </h1>
                )}
              </div>
              <div className="col-12 pt-4">
                <div className="d-flex justify-content-center">
                  <button
                    className="py-2 px-4 mx-3 btn btn-success"
                    onClick={scoreCalculate}
                  >
                    Submit
                  </button>

                  <button
                    className="py-2 px-4 mx-3 btn btn-warning"
                    onClick={resetVal}
                  >
                    Reset
                  </button>
                  <button
                    className="py-2 px-4 mx-3 btn btn-danger"
                    onClick={edit}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </React.Fragment>
          )}

          {editState && (
            <div className="col-12">
              {" "}
              <div
                style={{
                  fontSize: "20px",
                  padding: "20px",
                  background: "#9e8c26",
                  border: "5px solid white",
                }}
              >
                {editQuestions}
              </div>
              <div
                style={{
                  fontSize: "20px",
                  padding: "20px",
                  background: "#9e8c26",
                  border: "5px solid white",

                  marginTop: "50px",
                }}
              >
                <input
                  style={{
                    marginTop: "20px",
                    height: "100px",
                    width: "90%",
                    fontSize: "20px",
                    paddingLeft: "10px",
                  }}
                  type="text"
                  placeholder="Enter the question statement"
                  onChange={addQuestionStatement}
                  value={question}
                />
                <br />
                <input
                  style={{
                    marginTop: "50px",
                    margin: "20px auto",
                    width: "45%",
                    height: "50px",
                    fontSize: "20px",
                    paddingLeft: "10px",
                  }}
                  type="text"
                  placeholder="1st option"
                  onChange={addOption1}
                  value={option1.op}
                />
                <input
                  style={{
                    marginTop: "50px",
                    width: "45%",
                    height: "50px",
                    margin: "20px auto",
                    fontSize: "20px",
                    paddingLeft: "10px",
                  }}
                  type="text"
                  placeholder="2nd option"
                  onChange={addOption2}
                  value={option2.op}
                />
                <br />
                <input
                  style={{
                    width: "45%",
                    height: "50px",
                    margin: "10px auto",
                    fontSize: "20px",
                    paddingLeft: "10px",
                  }}
                  type="text"
                  placeholder="3rd option"
                  onChange={addOption3}
                  value={option3.op}
                />
                <input
                  style={{
                    width: "45%",
                    height: "50px",
                    margin: "10px auto",
                    fontSize: "20px",
                    paddingLeft: "10px",
                  }}
                  type="text"
                  placeholder="4th option"
                  onChange={addOption4}
                  value={option4.op}
                />
                <br />
                <input
                  style={{
                    marginTop: "50px",
                    width: "45%",
                    height: "50px",
                    margin: "20px auto",
                    fontSize: "20px",
                    paddingLeft: "10px",
                  }}
                  type="text"
                  placeholder="Correct option number (0,1,2,3)"
                  onChange={setCorrectOption}
                  value={cOption.op}
                />
                <br />
                <button
                  style={{
                    background: "yellow",
                    margin: "5px",
                    width: "197px",
                    color: "#2F4F4F",
                    height: "50px",
                    fontSize: "20px",
                  }}
                  onClick={addQuestionTile}
                >
                  Add
                </button>
                {error === true && (
                  <h1
                    style={{
                      background: "red",
                      margin: "auto",
                      marginTop: "5px",
                      width: "300px",
                      color: "white",
                      height: "30px",
                      fontSize: "20px",
                    }}
                  >
                    All fields are mandatory
                  </h1>
                )}
              </div>
              <button
                style={{
                  margin: "50px 50px",
                  background: "orange",
                  width: "197px",
                  color: "white",
                  height: "50px",
                  fontSize: "20px",
                }}
                onClick={exit}
              >
                Exit
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Quiz;
