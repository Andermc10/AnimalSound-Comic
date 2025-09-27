// components/AudioManager.jsx
import { forwardRef, useImperativeHandle, useRef } from 'react';

const AudioManager = forwardRef((props, ref) => {
  const audioElements = useRef({});
  
  useImperativeHandle(ref, () => ({
    playSound: (soundId) => {
      if (audioElements.current[soundId]) {
        audioElements.current[soundId].currentTime = 0;
        audioElements.current[soundId].play();
      }
    },
    playAmbient: (ambientId) => {
      // Lógica para sonidos ambientales
    },
    stopAmbient: () => {
      // Detener sonidos ambientales
    }
  }));

  return (
    <div style={{ display: 'none' }}>
      {/* Elementos de audio ocultos */}
      <audio ref={el => audioElements.current.whale = el} src="/sounds/whale.mp3" preload="auto" />
      <audio ref={el => audioElements.current.parrot = el} src="/sounds/parrot.mp3" preload="auto" />
      <audio ref={el => audioElements.current.bee = el} src="/sounds/bee.mp3" preload="auto" />
      <audio ref={el => audioElements.current.dolphin = el} src="/sounds/dolphin.mp3" preload="auto" />
    </div>
  );
});

AudioManager.displayName = 'AudioManager';

export default AudioManager;