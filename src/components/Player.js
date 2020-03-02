import React, { useState, useEffect, useRef } from "react";
import StopIcon from '@material-ui/icons/Stop';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import { green, red } from '@material-ui/core/colors';

const useAudio = url => {
  const audioItem = useRef(null);
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      if(audioItem.current !== null){
            playing ? audioItem.current.play() : stopReset();
      }
    },
    [playing]
  );

  function stopReset(){
    audioItem.current.pause();
    audioItem.current.currentTime = 0;
  }

  useEffect(() => {
    audioItem.current.addEventListener('ended', () => setPlaying(false));
    return () => {
        audioItem.current.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle, audioItem];
};

const Player = ({ url, controls }) => {
  const [playing, toggle, audioItem] = useAudio(url);

  return controls ? (
    <audio ref={audioItem} controls>
        <source src={url} type="audio/mpeg"/>
    </audio>
  ) : (
    <div onClick={toggle}>
        {
            playing ? 
                <StopIcon style={{ color: red[500]}}></StopIcon>
            :
                <RecordVoiceOverIcon style={{ color: green[500]}}></RecordVoiceOverIcon>  
        }
        <audio ref={audioItem}>
            <source src={url} type="audio/mpeg"/>
        </audio>
    </div>
  );
};

export default Player;