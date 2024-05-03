import { createNewGroup } from '@/apis/group';
import { setColor } from '@/utils/setColor';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
interface LogoutModalProps {
  modalOpen: boolean;
  handleClose: () => void;
//   handleLogout: () => void;
}

const CreateModal: React.FC<LogoutModalProps> = ({ modalOpen, handleClose }) => {
  const [groupname, setGroupname] = useState('');
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroupname(event.target.value);
  };
  const createGroup = () => {
    createNewGroup(groupname);
    handleClose();
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
  }