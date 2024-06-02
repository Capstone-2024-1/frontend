import { Box, Button } from '@mui/material';
import React, { useRef, useState } from 'react';
import NavigationBar from '../Home/navigationBar/NavigationBar';
import { processImage } from '@/utils/camera';
import { useUser } from '@/hook/useUser';
import { useRouter } from 'next/router';

const Camera = () => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { user, categorizeItems, currentGroup } = useUser();
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLoading(true);
      try {
        await processImage(file, user, categorizeItems, currentGroup, router);
      } finally {

      }
    }
  };

  const handleButtonClick = () => {
    setLoading(true);
    fileInputRef.current?.click();
  };

  return (
    <Box sx={containerStyle}>
      {loading && <Box sx={loadingStyle}>Loading...</Box>}
      <Box sx={videoContainerStyle} style={{ display: loading ? 'none' : 'flex' }}>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <Button
          onClick={handleButtonClick}
          variant="contained"
          color="primary"
          sx={captureButtonStyle}
        >
          Upload Image
        </Button>
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
  bgcolor: 'white',
  overflow: 'scroll',
  position: 'relative',
};

const videoContainerStyle = {
  position: 'relative',
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const captureButtonStyle = {
  marginTop: '20px',
  position: 'relative',
};

const loadingStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  fontSize: '24px',
  color: 'gray',
  zIndex: 10,
};
