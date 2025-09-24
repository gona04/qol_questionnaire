import React, { lazy, Suspense } from 'react';
import ErrorBoundary from './components/error-boundary/error-boundary.jsx'; // Import the ErrorBoundary component
import './App.css';

const LazyQuestionnairePage = lazy(() => import('./pages/questionnaire-page/questionnaire-page.jsx'));

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={<div>Loading questionnaire...</div>}>
          <LazyQuestionnairePage />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
