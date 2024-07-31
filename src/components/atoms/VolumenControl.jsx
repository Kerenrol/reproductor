import React from 'react';
import styled from 'styled-components';

const VolumeInput = styled.input`
  cursor: pointer;
  appearance: none;
  width: 100px;
  height: 8px;
  background-color: #4a2c77;
  border-radius: 15px;
  border: 2px solid #ffffff;
  margin: 0 10px;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 15px;
    height: 15px;
    background-color: #9c27b0;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const VolumeControl = ({ volume, onChange }) => {
  return (
    <VolumeInput
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={volume}
      onChange={onChange}
    />
  );
};

export default VolumeControl;
