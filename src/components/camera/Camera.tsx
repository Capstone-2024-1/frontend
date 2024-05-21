import { Box, Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import NavigationBar from '../Home/navigationBar/NavigationBar';
import getWebcam from '@/utils/camera';
import { setColor } from '@/utils/setColor';
import { sendImageToBackend } from '@/apis/camera';

const Camera = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          if (blob) {
            sendImageToBackend(blob);
            const url = URL.createObjectURL(blob);
            setImageUrl(url);
          }
        }, 'image/jpeg');
      }
    }
  };

  useEffect(() => {
    getWebcam((stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.setAttribute('playsinline', 'true'); // For iOS Safari
        videoRef.current.setAttribute('webkit-playsinline', 'true'); // Older iOS versions
      }
    });
  }, []);

  return (
    <Box sx={containerStyle}>
      <Box sx={videoContainerStyle}>
        <video ref={videoRef} autoPlay playsInline style={videoStyle}></video>
        <Button onClick={captureImage} variant="contained" color="primary" sx={captureButtonStyle}>
          Capture Image
        </Button>
        <canvas ref={canvasRef} style={canvasStyle}></canvas>
      </Box>
      <NavigationBar />
    </Box>
  );
};

export default Camera;

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  width: '100%',
  height: '100%',
  bgcolor: setColor('lightGrey') || 'grey',
  overflow: 'scroll',
};

const videoContainerStyle = {
  position: 'relative',
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const videoStyle = {
  width: '100%',
  maxWidth: '500px',
  height: 'auto',
  background: 'rgba(0, 0, 0, 0.5)',
};

const canvasStyle = {
  display: 'none',
  width: '500px',
  height: '500px',
};

const captureButtonStyle = {
  marginTop: '20px',
  position: 'absolute',
  bottom: '10px',
  left: '50%',
  transform: 'translateX(-50%)',
};

const imageStyle = {
  marginTop: '20px',
  width: '100%',
  maxWidth: '500px',
  height: 'auto',
  objectFit: 'cover',
};
