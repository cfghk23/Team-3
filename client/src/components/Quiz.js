import React from 'react'
import QuestionCard from './quizcomponents/QuestionCard'
import Card from './quizcomponents/QuestionCard'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';






function Quiz() {

  const data = {
    question:"What is the capital of France?",
    options:['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    type: 'info',
    link: 'https://www.youtube.com/embed/blga9Bmz97A?si=h8XNJP97eF4O0N_k',
    info: 'Financial literacy refers to the understanding of various financial areas including managing personal finances, money, and investing. It encompasses the knowledge required to make informed decisions about budgeting, savings, debt, and long-term financial planning, such as retirement. This skill set also involves understanding how money works, including compound interest, credit risks, and the benefits of a diversified investment portfolio. A lack of financial literacy can lead to poor financial choices that can have adverse life consequences. Promoting financial education helps individuals achieve stability, safeguard against fraud, and attain personal financial goals, ultimately contributing to a stronger economic framework for society.'
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