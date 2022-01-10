import React from 'react';
import s from './button.module.css'

function Button({text, onClick}){

  return(
    <button onClick={onClick} className={s.btn}>{text}</button>
  );
}

export default Button;
