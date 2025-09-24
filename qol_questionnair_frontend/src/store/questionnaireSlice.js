import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentQuestionIndex: 0,
  answers: {},
  showResults: false,
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionId, value } = action.payload;
      state.answers[questionId] = value;
    },
    goToNextQuestion: (state, action) => {
      if (state.currentQuestionIndex < action.payload - 1) {
        state.currentQuestionIndex += 1;
      } else {
        state.showResults = true;
      }
    },
    goToPreviousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    resetQuestionnaire: (state) => {
      state.currentQuestionIndex = 0;
      state.answers = {};
      state.showResults = false;
    },
  },
});

export const { setAnswer, goToNextQuestion, goToPreviousQuestion, resetQuestionnaire } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
