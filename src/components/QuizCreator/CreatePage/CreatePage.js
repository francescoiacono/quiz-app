import React from 'react';
import QuestionCreator from './QuestionCreator/QuestionCreator';
import classes from './CreatePage.module.css';
import Button from '../../../UI/Button/Button';

const CreatePage = () => {
  return (
    <div className={classes.CreatePage}>
      <div className={classes.MainContainer}>
        <div className={classes.Title}>
          <p>Create Quiz</p>
        </div>
        <QuestionCreator index='1' />
        <QuestionCreator index='2' />
        <QuestionCreator index='3' />
        <div className={classes.ButtonContainer}>
          <Button>Create</Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
