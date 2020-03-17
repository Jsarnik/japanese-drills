import React, { useState, useEffect, useRef } from "react";
import StopIcon from '@material-ui/icons/Stop';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import { green, red } from '@material-ui/core/colors';

const useAudio = url => {
  const [audio, setAudio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  useEffect(()=>{
    if(audio !== null){
          playing ? audio.play() : stopReset();
    }
    setAudio(new Audio(url));
    setPlaying(false);
  }, [url])

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      if(audio !== null){
            playing ? audio.play() : stopReset();
      }
    },
    [playing]
  );

  function stopReset(){
    audio.pause();
    audio.currentTime = 0;
  }

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle, audio];
};

const Player = ({ url, controls }) => {
  const _url = url.indexOf('http') === -1 ? `http://japanese-drills.s3.amazonaws.com/audio/${url}` : url;
  const [playing, toggle] = useAudio(_url);
  let audioPlayer = useRef(null);

  useEffect(()=>{
    if(audioPlayer && audioPlayer.current){
      audioPlayer.current.src = _url;
    }
  }, [url])

  return controls ? (
    <audio controls ref={audioPlayer}>
        <source src={_url} type="audio/mpeg"/>
    </audio>
  ) : (
    <div onClick={toggle}>
        {
            playing ? 
                <StopIcon style={{ color: red[500]}}></StopIcon>
            :
                <RecordVoiceOverIcon style={{ color: green[500]}}></RecordVoiceOverIcon>  
        }
    </div>
  );
};

export default Player;