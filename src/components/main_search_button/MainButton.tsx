import React from 'react';
import './MainButton.css';


interface MainButtonProps {
  text: string;
  onClick?: () => void;
}

const MainButton: React.FC<MainButtonProps> = ({ text, onClick }) => {
  return (
    <button className="main-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default MainButton;
