import React from 'react';
import classes from './Button.module.css';

const Button = ({ small, children }) => {
  return (
    <>
      {small ? (
        <button className={`${classes.Button} ${classes.Small}`}>
          {children}
        </button>
      ) : (
        <button className={`${classes.Button} ${classes.Big}`}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
