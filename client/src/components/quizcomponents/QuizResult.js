import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import quizData from '../context/QuizContext';

function QuizResult() {
  const location = useLocation();
  const [answers] = useState(location.state?.answers ?? []);

  const numCorrect = answers.reduce((acc, curr, idx) => {
    return curr === quizData[idx].options[quizData[idx].correct] ? acc + 1 : acc;
  }, 0);


  return (
    <div>
      <h1>Results</h1>
      <p>You got {numCorrect} out of {quizData.length} questions correct!</p>
      <img src="https://leaderboardhq.com/jp16er9x" alt="Rank" />
    </div>
  );
}

export default QuizResult;