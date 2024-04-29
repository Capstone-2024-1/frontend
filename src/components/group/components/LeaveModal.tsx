import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
interface LogoutModalProps {
  leaveOpen: boolean;
  handleClose: () => void;
  handleLeave: () => void;
}

const LeaveModal: React.FC<LogoutModalProps> = ({ leaveOpen, handleClose, handleLeave }) => {
  return (
    <Dialog open={leaveOpen} onClose={handleClose}>
      <DialogTitle>{"Leave the Group"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to leave the group?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleLeave} autoFocus>
            Leave
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default LeaveModal;