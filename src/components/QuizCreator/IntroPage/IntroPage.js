import React from 'react';
import Button from '../../../UI/Button/Button';
import classes from './IntroPage.module.css';

const IntroPage = () => {
  return (
    <div className={classes.IntroPage}>
      <div>
        <p className={classes.Title}>Quiz Creator</p>
      </div>
      <div className={classes.ButtonContainer}>
        <Button>Create a new Quiz!</Button>
      </div>
    </div>
  );
};

export default IntroPage;
