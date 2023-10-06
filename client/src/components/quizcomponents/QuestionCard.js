import React, { useState } from 'react';

function QuestionCard({ content }) {
  const question = content.question;
  const options = content.options;
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-1">
        <div className="text-xl font-medium text-black">
          {question}
        </div>
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
      </div>
    </div>
  );
}

export default QuestionCard;
