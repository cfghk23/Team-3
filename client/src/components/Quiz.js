import React from 'react'
import QuestionCard from './quizcomponents/QuestionCard'
import Card from './quizcomponents/QuestionCard'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';






function Quiz() {

  const data = {
    question:"What is the capital of France?",
    options:['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    type: 'question'
  }



  return (  
    <div className='text-lg m-60'>
      <QuestionCard
        content={data}
      />
    </div>
  )
}

export default Quiz