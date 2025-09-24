import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Questionnaire from '../components/questionnaire/questionnaire.jsx';
import Result from '../components/result/result.jsx';
import './questionnaire-page.styles.css'; // Import the dedicated styles

const QuestionnairePage = () => {
  const { answers, showResults } = useSelector((state) => state.questionnaire);
  const [gptAnalysis, setGptAnalysis] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null)
  // localURL = `http://localhost:8080/analyze`;
  // publish_URL = `https://qol-questionnaire.onrender.com/`;
  useEffect(() => {
    setUrl(`https://qol-questionnaire.onrender.com/`);
    if (showResults && !loading && !error && gptAnalysis === '') {
      const sendAnswersToBackend = async () => {
        setLoading(true);
        setError(null);
        setGptAnalysis(''); // Clear previous analysis when starting a new one
        
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ answers }),
          });

          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || 'Failed to get analysis');
          }

          const data = await response.json();
          setGptAnalysis(data);
        } catch (err) {
          console.error('Error sending answers to backend:', err);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      sendAnswersToBackend();
    }
  }, [showResults, loading, error, answers, gptAnalysis]);

  if (showResults) {
    if (loading) {
      return <div className="loading-message">Getting your personalized feedback...</div>;
    }
    if (error) {
      return <div className="error-message">Error: {error}</div>;
    }
    return (
      <Result
        gptAnalysis={gptAnalysis}
      />
    );
  }

  return <Questionnaire />;
};

export default QuestionnairePage;
