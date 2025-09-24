import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { qualityOfLife } from '../data/qolData';
import { setAnswer, goToNextQuestion, goToPreviousQuestion } from '../store/questionnaireSlice';
import InputQuestion from '../input-question/index.jsx'; // Now imports from the folder, index.jsx is explicitly referenced
import './questionnaire.styles.css'; // Import the dedicated styles

const Questionnaire = () => {
  const dispatch = useDispatch();
  const { currentQuestionIndex, answers } = useSelector((state) => state.questionnaire);

  const handleInputChange = (questionId, value) => {
    dispatch(setAnswer({ questionId, value }));
  };

  const handleGoToNextQuestion = () => {
    dispatch(goToNextQuestion(qualityOfLife.questions.length));
  };

  const handleGoToPreviousQuestion = () => {
    dispatch(goToPreviousQuestion());
  };

  const currentQuestion = qualityOfLife.questions[currentQuestionIndex];

  return (
    <div className="questionnaire-container">
      <h1>{qualityOfLife.title}</h1>
      <p>{qualityOfLife.intro}</p>
      <InputQuestion
        question={currentQuestion}
        onInputChange={handleInputChange}
        selectedAnswer={answers[currentQuestion.id]}
        onEnterPress={handleGoToNextQuestion}
      />
      <div className="navigation-buttons">
        <button onClick={handleGoToPreviousQuestion} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        <button onClick={handleGoToNextQuestion} disabled={!answers[currentQuestion.id] || answers[currentQuestion.id].trim() === ''}>
          {currentQuestionIndex === qualityOfLife.questions.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Questionnaire;
