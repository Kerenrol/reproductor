import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PlayerControls from '../molecules/PlayerControl';
import songs from '../../data/songs';

const PlayerContainer = styled.div`
  text-align: center;
  background-color: #3a1a6b;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  width: 100%;
  max-width: 500px;
  color: #fff;
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border: 2px solid #fffdfd;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const SongInfo = styled.div`
  font-family: 'Fira Code', monospace;
  margin-bottom: 20px;
  font-size: 18px;

  p {
    margin: 0;
  }
`;

const TimeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 16px;
`;

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const { track, image, title, artist } = songs[currentSongIndex];

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const handlePrevSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSongIndex]);

  return (
    <PlayerContainer>
      <Image src={image} alt="Song cover" />
      <SongInfo>
        <p>{title}</p>
        <p>{artist}</p>
      </SongInfo>
      <audio
        ref={audioRef}
        src={track}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      <PlayerControls
        isPlaying={isPlaying}
        onPlayPauseClick={handlePlayPause}
        onPrevClick={handlePrevSong}
        onNextClick={handleNextSong}
        volume={volume}
        onVolumeChange={handleVolumeChange}
        currentTime={currentTime}
        duration={duration}
        onProgressChange={handleProgressChange}
      />
      <TimeInfo>
        <div>{currentTime.toFixed(2)}</div>
        <div>{duration.toFixed(2)}</div>
      </TimeInfo>
    </PlayerContainer>
  );
};

export default MusicPlayer;
