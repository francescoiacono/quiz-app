import React from 'react';
import CreatePage from './CreatePage/CreatePage';
import IntroPage from './IntroPage/IntroPage';

import classes from './QuizCreator.module.css';

const QuizCreator = () => {
  return (
    <div className={classes.QuizCreator}>
      <IntroPage />
      <CreatePage />
      <p>quiz</p>
    </div>
  );
};

export default QuizCreator;
