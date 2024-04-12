import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
interface LogoutModalProps {
  logoutOpen: boolean;              // 모달이 열려있는지 여부
  handleClose: () => void;          // 모달을 닫는 함수
  handleLogout: () => void;         // 로그아웃 처리 함수
}

const LogoutModal: React.FC<LogoutModalProps> = ({ logoutOpen, handleClose, handleLogout }) => {
  return (
    <Dialog open={logoutOpen} onClose={handleClose}>
      <DialogTitle>{"Log Out"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleLogout} autoFocus>
            Log Out
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default LogoutModal