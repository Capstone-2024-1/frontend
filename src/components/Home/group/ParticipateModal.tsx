import { participateNewGroup } from '@/apis/group';
import { useUser } from '@/hook/useUser';
import { setColor } from '@/utils/setColor';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
interface LogoutModalProps {
  modalOpen: boolean;
  handleClose: () => void;
//   handleLogout: () => void;
}

const ParticipateModal: React.FC<LogoutModalProps> = ({ modalOpen, handleClose }) => {
  const {user} = useUser();
  const [code, setCode] = useState('');
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };
  const participateGroup = () => {
    participateNewGroup(code, user.accessToken);
    handleClose();
  }


  return (
    <Dialog open={modalOpen} onClose={handleClose}>
      <DialogTitle>{"Participate the Team"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Input the GROUP CODE
          </DialogContentText>
          <TextField sx={textFieldStyle} id='outlined-basic' label='Group Code' variant='outlined' onChange={handleNameChange}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={participateGroup}>participate</Button>
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