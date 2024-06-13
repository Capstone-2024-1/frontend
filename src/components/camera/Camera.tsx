import { Box, Button } from '@mui/material';
import React, { useRef, useState, useEffect } from 'react';
import NavigationBar from '../Home/navigationBar/NavigationBar';
import { processImage } from '@/utils/camera';
import { useUser } from '@/hook/useUser';
import { useRouter } from 'next/router';
import { setColor } from '@/utils/setColor';

const Camera = () => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { user, categorizeItems, currentGroup } = useUser();
  const [loading, setLoading] = useState<boolean>(false);
  const [isIOS, setIsIOS] = useState<boolean>(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    setIsIOS(isIOS);

    if (!isIOS) {
      fileInputRef.current?.click();
      setLoading(true);
    }
  }, []);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLoading(true);
      try {
        await processImage(file, user, categorizeItems, currentGroup, router);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const handleClick = () => {
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
        {isIOS && (
          <Button
            onClick={handleClick}
            variant="contained"
            color="primary"
            sx={captureButtonStyle}
          >
            Upload Image
          </Button>
        )}
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
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const captureButtonStyle = {
  marginTop: '20px',
  position: 'relative',
  borderRadius: '50px',
  padding: '17px 30px',
  backgroundColor: setColor('main'),
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    backgroundColor: setColor('sub'),
  },
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
