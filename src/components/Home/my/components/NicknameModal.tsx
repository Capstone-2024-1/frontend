// import { postProject } from '@/apis/project';
import { postNicknameModify } from '@/apis/my';
import { useUser } from '@/hook/useUser';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
interface LogoutModalProps {
  nicknameOpen: boolean;
  handleNicknameClose: () => void;
}

const NicknameModal: React.FC<LogoutModalProps> = ({ nicknameOpen, handleNicknameClose }) => {
  const {setName, user} = useUser();
  const [nickname, setNickname] = useState<string>('');
  const [reporter, setReporter] = useState<string>('');
  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const handleCreate = async() => {
    await postNicknameModify(nickname, user.accessToken);
    setName(nickname);
    handleNicknameClose();
  }
  
  return (
    <Dialog open={nicknameOpen} onClose={handleNicknameClose}>
      <DialogTitle>{"Modify your Nickname"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Modify Your Nickname

          <Box sx={fieldBoxStyle}>
          New Nickname
          <TextField sx={textFieldStyle} id='outlined-basic' label='nickname' variant='outlined' onChange={handleNicknameChange}/>
          </Box>

        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCreate}>Modify</Button>
      </DialogActions>
    </Dialog>
  )
};
  

export default NicknameModal;

const fieldBoxStyle = {
  width: '90%',
  marginTop: '10px',
}

const textFieldStyle = {
  width: '100%',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'red',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
  '& .MuiInputBase-input': {
    padding: '10px',

  },
  '& .MuiInputLabel-root': {
    transform: 'translate(14px, 14px) scale(1)',
    '&.MuiInputLabel-shrink': {
      transform: 'translate(14px, -15px) scale(0.75)',
    },
  },
};