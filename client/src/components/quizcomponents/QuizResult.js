import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { quizData } from '../../Context/QuizContext';
// import quizData from '../context/QuizContext';

function QuizResult() {
  const location = useLocation();
  const [answers] = useState(location.state?.answers ?? []);


  const numCorrect = answers.reduce((acc, curr, idx) => {
    return curr === quizData[idx].options[quizData[idx].correct] ? acc + 1 : acc;
  }, 0);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  };

  const headingStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const textStyle = {
    fontSize: '24px',
    marginBottom: '40px',
  };

  const imageStyle = {
    width: '560px',
    height: '315px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Results</h1>
      <p style={textStyle}>You got {numCorrect} out of {quizData.length} questions correct!</p>
      <img src="https://leaderboardhq.com/jp16er9x" alt="Rank" style={imageStyle} />
    </div>
  );
}

export default QuizResult;