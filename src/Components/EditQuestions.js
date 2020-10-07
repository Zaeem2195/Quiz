import React from "react";

const EditQuestions = ({ data, methoddelete }) => {
  return (
    <div>
      <button
        className="mb-5 py-3 w-50"
        style={{
          background: "white",
          fontFamily: "ariel",
          borderRadius: "10px",

          fontSize: "25px",
        }}
        onClick={() => methoddelete(data.id)}
      >
        {data.question}
      </button>
    </div>
  );
};

export default EditQuestions;
