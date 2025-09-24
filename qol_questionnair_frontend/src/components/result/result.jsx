import React from 'react';
import './result.styles.css'; // Import the dedicated styles

const Result = ({ gptAnalysis }) => {
  if (!gptAnalysis) {
    return null;
  }

  return (
    <div className="result-container">
      <h2>Your Analysis</h2>
      
      <div className="gpt-analysis">
        <h3>Key Insights:</h3>
        <p>{gptAnalysis.keyInsights}</p>

        <h3>Your Strengths:</h3>
        <p>{gptAnalysis.yourStrengths}</p>

        <h3>Opportunities for Reflection/Growth:</h3>
        <ul>
          {gptAnalysis.opportunitiesForReflection && gptAnalysis.opportunitiesForReflection.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>

        <h3>Personalized Guidance:</h3>
        <p>{gptAnalysis.personalizedGuidance}</p>
      </div>
    </div>
  );
};

export default Result;
