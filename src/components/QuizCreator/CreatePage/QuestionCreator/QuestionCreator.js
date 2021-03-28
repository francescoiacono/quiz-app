import React, { useState } from 'react';
import Button from '../../../../UI/Button/Button';
import classes from './QuestionCreator.module.css';

const QuestionCreator = ({ index }) => {
  return (
    <div className={classes.QuestionCreator}>
      <div>
        <p>Q{index}</p>
      </div>
      <div>
        <input placeholder='Type a question' />{' '}
      </div>
      <div>
        <Button small>Add Question</Button>
      </div>
    </div>
  );
};

export default QuestionCreator;
