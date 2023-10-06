import React, { useState } from 'react';
import YouTubeVideo from './VideoComponent';

function QuestionCard({ content }) {
  const question = content.question;
  const options = content.options;
  const questionType = content.type;
  const [selectedOption, setSelectedOption] = useState(null);


  

  return (
    <div className="p-6 w-8/12 mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-1">
        <div className="text-xl font-medium text-black">
          {question}
        </div>
        <div>
          {questionType === 'question' ? 
             <div className="mt-4 space-y-4">
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
           </div>
          :
            questionType === 'video'      ? <YouTubeVideo videoLink={content.link} /> :
            questionType === 'info'       ? 
            <div className='text-sm m-12'>
              {content.info}
            </div> : null}
        
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