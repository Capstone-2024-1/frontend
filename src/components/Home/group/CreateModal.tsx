import { createNewGroup } from '@/apis/group';
import { useUser } from '@/hook/useUser';
import { setColor } from '@/utils/setColor';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';

interface LogoutModalProps {
  modalOpen: boolean;
  handleClose: () => void;
  onCreate: () => void;
}

const CreateModal: React.FC<LogoutModalProps> = ({ modalOpen, handleClose, onCreate }) => {
  const { user, setAccessToken } = useUser();
  const [groupname, setGroupname] = useState('');

  useEffect(() => {
    if (user.accessToken === "") {
      const token = localStorage.getItem('accessToken');
      if (token) {
        setAccessToken(token);
      }
    }
  }, [user.accessToken, setAccessToken]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroupname(event.target.value);
  };

  const createGroup = async () => {
    const token = user.accessToken || localStorage.getItem('accessToken');
    if (token) {
      await createNewGroup(groupname, token);
      onCreate();
      handleClose();
    } else {
      console.error('No access token available');
    }
  }

  return (
    <Dialog open={modalOpen} onClose={handleClose}>
      <DialogTitle>{"Create the Team"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please Write new group name
        </DialogContentText>
        <TextField sx={textFieldStyle} id='outlined-basic' label='Group Name' variant='outlined' onChange={handleNameChange}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={createGroup}>Create</Button>
      </DialogActions>
    </Dialog>
  )
}

export default CreateModal;

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
};
