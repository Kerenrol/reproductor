import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px;
`;

const ProgressBarInput = styled.input`
  width: 100%;
  height: 10px;
  background-color: #4a2c77;
  border-radius: 10px;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  z-index: 1;

  &::-webkit-slider-thumb {
    width: 15px;
    height: 15px;
    background-color: #9c27b0;
    border-radius: 50%;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    position: relative;
    z-index: 2;
  }
`;

const ProgressBar = ({ currentTime, duration, onChange }) => {
  return (
    <ProgressBarContainer>
      <ProgressBarInput
        type="range"
        min="0"
        max={duration}
        step="0.01"
        value={currentTime}
        onChange={onChange}
      />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
