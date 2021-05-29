import React from 'react';

import VideoCall from './videoCall';
import { ContextProvider } from './Context';

import './styles.css';

const WebRtc = () => {
  return (
    <ContextProvider>
      <VideoCall />
    </ContextProvider>
  );
}


export default WebRtc;

