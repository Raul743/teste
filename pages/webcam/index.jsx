import { FC, useState, useRef, useEffect } from 'react';

const WebCam = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error('error:', err);
      });
  };

  return (
    <div>
      <button>Take a photo</button>
      <video ref={videoRef} />
      <canvas />
    </div>
  );
};
export default WebCam;
