import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px;
  margin: 10px;
  font-size: 20px;
  cursor: pointer;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 50px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2e6330;
  }
`;

const PlayPauseButton = ({ isPlaying, onClick }) => {
  return (
    <Button onClick={onClick}>
      {isPlaying ? 'Pause' : 'Play'}
    </Button>
  );
};

export default PlayPauseButton;