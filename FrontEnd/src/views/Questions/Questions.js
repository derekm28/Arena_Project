import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

import TextQuestion from './questionTypes/TextQuestion';
import BooleanQuestion from './questionTypes/BooleanQuestion';

export default function Questions() {
  const questions = useSelector(state => state.QuestionReducer.questions)
  var [currentIndex, setCurrentIndex] = useState(0);
  var [size, setSize] = useState(questions.length - 1);

  const incrementIndex = () => {
    if (currentIndex >= size) {
      return
    }

    setCurrentIndex(currentIndex + 1);
  }

  return (
    <Box>
      <TextQuestion incrementIndex={incrementIndex} question={questions[currentIndex]} />
      <BooleanQuestion incrementIndex={incrementIndex} question={questions[currentIndex]} />
    </Box>
  );
}
