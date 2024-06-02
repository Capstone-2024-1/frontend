import { participateNewGroup } from '@/apis/group';
import { useUser } from '@/hook/useUser';
import { setColor } from '@/utils/setColor';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface LogoutModalProps {
  modalOpen: boolean;
  handleClose: () => void;
}

const ParticipateModal: React.FC<LogoutModalProps> = ({ modalOpen, handleClose }) => {
  const { user, setAccessToken } = useUser();
  const [code, setCode] = useState('');

  useEffect(() => {
    if (user.accessToken === "") {
      const token = localStorage.getItem('accessToken');
      if (token) {
        setAccessToken(token);
      }
    }
  }, [user.accessToken, setAccessToken]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const participateGroup = () => {
    const token = user.accessToken || localStorage.getItem('accessToken');
    if (token) {
      participateNewGroup(code, token);
      handleClose();
    } else {
      console.error('No access token available');
    }
  }

  return (
    <Dialog open={modalOpen} onClose={handleClose}>
      <DialogTitle>{"Participate the Team"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please Input the GROUP CODE
        </DialogContentText>
        <TextField sx={textFieldStyle} id='outlined-basic' label='Group Code' variant='outlined' onChange={handleNameChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={participateGroup}>Participate</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ParticipateModal;

const textFieldStyle = {
  width: '100%',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: setColor('main'),
    },
    '&:hover fieldset': {
      borderColor: setColor('emphasize'),
    },
    '&.Mui-focused fieldset': {
      borderColor: setColor('main'),
    },
  },
}
