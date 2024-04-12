import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react'
interface ContactModalProps {
  contactOpen: boolean;
  handleClose: () => void;
  handleContact: () => void;
}
  
const ContactModal: React.FC<ContactModalProps> = ({ contactOpen, handleClose, handleContact }) => {
  return (
    <Dialog open={contactOpen} onClose={handleClose}>
      <DialogTitle>{"Contact"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            email : safeat057@gmail.com
          </DialogContentText>
        </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
    )
  }

export default ContactModal;