import React from 'react';
import './input-question.styles.css'; // Import the dedicated styles

const InputQuestion = ({ question, onInputChange, selectedAnswer, onEnterPress }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && selectedAnswer && selectedAnswer.trim() !== '') {
      onEnterPress();
    }
  };

  return (
    <div className="question-container">
      <h3>{question.text}</h3>
      <div className="input-container">
        <input
          type="text"
          value={selectedAnswer || ''}
          onChange={(e) => onInputChange(question.id, e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your answer here..."
          className="text-input"
        />
      </div>
    </div>
  );
};

export default InputQuestion;
