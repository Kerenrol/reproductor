import React from 'react';
import styled from 'styled-components';
import PlayPauseButton from '../atoms/PlayPauseButton';
import VolumeControl from '../atoms/VolumenControl';
import ProgressBar from '../atoms/ProgressBar';

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  margin: 10px;
  font-size: 20px;
  cursor: pointer;
  background-color: #7c4dff;
  color: #fff;
  border: none;
  border-radius: 50px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5e35b1;
  }
`;

const PlayerControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
  volume,
  onVolumeChange,
  currentTime,
  duration,
  onProgressChange,
}) => {
  return (
    <ControlsContainer>
      <div>
        <Button onClick={onPrevClick}>Prev</Button>
        <PlayPauseButton isPlaying={isPlaying} onClick={onPlayPauseClick} />
        <Button onClick={onNextClick}>Next</Button>
      </div>
      <VolumeControl volume={volume} onChange={onVolumeChange} />
      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        onChange={onProgressChange}
      />
    </ControlsContainer>
  );
};

export default PlayerControls;
