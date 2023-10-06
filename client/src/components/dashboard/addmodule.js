import React, { useState } from "react";

function AddModule() {
  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    borderRadius: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#F5A623",
    color: "white",
    border: "none",
    outline: "none",
    padding: "10px 20px",
    margin: "5px",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "20px",
  };

  const buttonGroupStyle = {
    display: "flex",
    justifyContent: "center",
  };
  const profilePictureStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "gray",
    top: "-20px",
    right: "0",
  };
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", ""], correctAnswer: 0 },
  ]);
  const [contestType, setContestType] = useState("weekly");
  const [level, setLevel] = useState("");

  const handleQuestionChange = (event, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (event, questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectAnswerChange = (event, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].correctAnswer = parseInt(event.target.value);
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    const updatedQuestions = [...questions];
    updatedQuestions.push({
      question: "",
      options: ["", "", ""],
      correctAnswer: 0,
    });
    setQuestions(updatedQuestions);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleContestTypeChange = (event) => {
    setContestType(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to server)
    const formData = {
      contestType,
      level,
      questions: questions.map(({ question, options, correctAnswer }) => ({
        question,
        options,
        correctAnswer,
      })),
    };
    console.log("Form Data:", formData);
  };

  return (
    <div style={{ marginLeft: "50px" }}>
      <div className="dashboard">
        {/* Create the button group */}
        <div>
          <div style={buttonContainerStyle}>
            <div style={profilePictureStyle}></div>
            <div style={buttonGroupStyle}>
              <button style={buttonStyle}>
                <a href="/dashboard">Courses Analytics</a>
              </button>
              <button style={buttonStyle}>
                <a href="/students">Students Performance</a>
              </button>
              <button style={buttonStyle}>
                <a href="/addmodule">Add Modules</a>
              </button>
            </div>
          </div>
        </div>

        {/* Create the profile picture */}
      </div>
      <div>
        <h1 style={{ fontSize: "24px", color: "#05a8aa" }}>Add Module</h1>
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
          <label>
            Contest Type:
            <select
              value={contestType}
              onChange={handleContestTypeChange}
              name="contestType"
            >
              <option value="weekly">Weekly Contest</option>
              <option value="regular">Regular Module</option>
            </select>
          </label>
          <br />
          {contestType === "regular" && (
            <label>
              Level:
              <select value={level} onChange={handleLevelChange} name="level">
                <option value="">Select Level</option>
                <option value="rising-star">FQ Rising Star</option>
                <option value="explorer">FQ Explorer</option>
                <option value="challenger">FQ Challenger</option>
                <option value="leader">FQ Leader</option>
                <option value="master">FQ Master</option>
                <option value="uni">FQ Uni</option>
                <option value="good-life">Good Life</option>
              </select>
            </label>
          )}
          <br />
          {questions.map((question, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <label>
                Question {index + 1}:
                <input
                  type="text"
                  value={question.question}
                  onChange={(event) => handleQuestionChange(event, index)}
                  name={`question${index}`}
                />
              </label>
              <br />
              {question.options.map((option, optionIndex) => (
                <label key={optionIndex}>
                  Option {optionIndex + 1}:
                  <input
                    type="text"
                    value={option}
                    onChange={(event) =>
                      handleOptionChange(event, index, optionIndex)
                    }
                    style={{ marginLeft: "10px" }}
                    name={`question${index}_option${optionIndex}`}
                  />
                </label>
              ))}
              <br />
              <label>
                Correct Answer:
                <select
                  value={question.correctAnswer}
                  onChange={(event) => handleCorrectAnswerChange(event, index)}
                  name={`question${index}_correctAnswer`}
                >
                  {question.options.map((_, optionIndex) => (
                    <option key={optionIndex} value={optionIndex}>
                      Option {optionIndex + 1}
                    </option>
                  ))}
                </select>
              </label>
              {index === questions.length - 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveQuestion(index)}
                  style={{ marginLeft: "10px" }}
                >
                  Remove Question
                </button>
              )}
              <hr style={{ marginTop: "10px" }} />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddQuestion}
            style={{
              backgroundColor: "#b8d5b8",
              borderRadius: "5px",
              padding: "5px 10px",
            }}
          >
            Add Question
          </button>
          <br />
          <br />
          <button
            type="submit"
            style={{
              backgroundColor: "#dc602e",
              color: "white",
              borderRadius: "5px",
              padding: "10px 20px",
              fontSize: "16px",
            }}
          >
            Submit Quiz
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddModule;
