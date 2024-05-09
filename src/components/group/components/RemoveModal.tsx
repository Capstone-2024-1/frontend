import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
interface LogoutModalProps {
  removeOpen: boolean;
  handleClose: () => void;
  handleRemove: () => void;
}

const RemoveModal: React.FC<LogoutModalProps> = ({ removeOpen, handleClose, handleRemove }) => {
  return (
    <Dialog open={removeOpen} onClose={handleClose}>
      <DialogTitle>{"Remove the Group"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to remove the group?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleRemove} autoFocus>
            Remove
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default RemoveModal;