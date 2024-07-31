import React from 'react';
import styled from 'styled-components';
import MusicPlayer from '../components/organisms/MusicPlayer';

const HomePageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97vh;
  background-color: #2a0540;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <MusicPlayer />
    </HomePageContainer>
  );
};

export default HomePage;
