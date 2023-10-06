import React, { useState } from 'react'
import QuestionCard from './quizcomponents/QuestionCard'
import {quizData} from '../Context/QuizContext';
import Pagination from '@mui/material/Pagination';
import CourseTable from './tables/BestCourseTable';
import WorstCourseTable from './tables/WorstCourseTable';
import { useNavigate } from 'react-router-dom';

function Quiz() {
  const [questions] = useState(quizData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const submitAnswer = (answerIndex) => {
    
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setAnswers(newAnswers);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      calculateScore();
      navigate('/quizresult', { state: { answers } });
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (question.correct === answers[index]) {
        score += 1;
      }
    });
    console.log(`You scored ${score} out of ${questions.length}`);
  };

  const currentQuestion = questions[currentQuestionIndex];

  // const data = quizData;

  // console.log(quizData)

  // const data = {
  //   question:"What is the capital of France?",
  //   options:['Berlin', 'Madrid', 'Paris', 'Lisbon'],
  //   type: 'question',
  //   link: 'https://www.youtube.com/embed/blga9Bmz97A?si=h8XNJP97eF4O0N_k',
  //   info: 'Financial literacy refers to the understanding of various financial areas including managing personal finances, money, and investing. It encompasses the knowledge required to make informed decisions about budgeting, savings, debt, and long-term financial planning, such as retirement. This skill set also involves understanding how money works, including compound interest, credit risks, and the benefits of a diversified investment portfolio. A lack of financial literacy can lead to poor financial choices that can have adverse life consequences. Promoting financial education helps individuals achieve stability, safeguard against fraud, and attain personal financial goals, ultimately contributing to a stronger economic framework for society.'
  // }

  // const data = {
  //   "id": 1,
  //   "text": "What is a budget?",
  //   "options": {
  //     "A": "A plan for how you will spend your money",
  //     "B" : "A type of bank account",
  //     "C" : "A way to earn interest on your savings",
  //     "D" : "A type of credit card"
  //   },
  //   "correct": 'B',
  //   "type": 'question'
  // }


  return (  
    <div className='text-lg m-60'>
      <QuestionCard
        question={currentQuestion}
        submitHandler = {submitAnswer}
      />
      <div className='flex flex-col w-full items-center'>
        <div className='m-10'>
          <Pagination count={quizData.length - 1} page={currentQuestionIndex} hideNextButton hidePrevButton color='secondary'/>
        </div>
      </div>
      
    </div>
  )
}

export default Quiz