import React, { useState } from 'react';
import YouTubeVideo from './VideoComponent';

function QuestionCard({ question, submitHandler }) {
  // const question = content.question;
  // const options = content.options;
  const questionType = question.type;
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="p-6 w-8/12 mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-1">
        <div className="text-xl font-medium text-black">
          {question.text}
        </div>
        <div>
          {questionType === 'question' ? 
             <div className="mt-4 space-y-4">
             <div>
             {Object.entries(question.options).map(([key, value]) => (
              <div key={key} className={`mx-4 ml-2 rounded-lg p-4 ${(selectedOption == key ? ('bg-red-600 bg-opacity-30'):(''))}`} onClick={() => setSelectedOption(`${key}`)}>
                <label key={key} className="flex items-center">
                    <span >{`${key}. ${value}`}</span>
                </label>
              </div>
      ))}
             </div>
             
           </div>
          :
            questionType === 'video' ? <YouTubeVideo videoLink={question.link} /> :
            questionType === 'info'       ? 
            <div className='text-sm m-12'>
              {question.info}
            </div> : null}
            <button onClick={() => {

            if (selectedOption == null && (questionType == 'question')) {
              alert("Selected an option");
            }
            else {
              submitHandler(selectedOption)
              setSelectedOption(null);
            }
            }} className='p-4 m-2 rounded-lg bg-red-600 text-white '>
              {(questionType == 'question' ? 'Submit' : "Next")}
            </button>
        <div>
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
  {/* <div className="mt-4 space-y-4">
          {options.map((option, index) => (
            <label key={index} className="flex items-center">
              <input
                type="radio"
                name="mcq-option"
                className="form-radio text-indigo-600"
                onChange={() => setSelectedOption(option)}
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div> */}