import React, { ChangeEvent } from 'react';
import './styles.css';

interface InputProps { 
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <input
      className=" form-control base-input"
      type="text "
      name='review'
      value={value}
      onChange={onChange}
      placeholder='Deixe sua avaliação aqui'
    /> 
  );
};

export default Input;
