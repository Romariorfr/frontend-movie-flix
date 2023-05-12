import React, { ChangeEvent } from 'react';
import './styles.css';

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <input
      className="input-default"
      type="text "
      value={value}
      onChange={onChange}
    /> 
  );
};

export default Input;
