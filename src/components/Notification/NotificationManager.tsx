import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
interface IProps {
  open: boolean;
  handleClose: () => void;
  message: string;
}
export default function NotificationManager({ open, handleClose, message }: IProps) {
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={message}
        action={
          <>
            <IconButton size="small" aria-label="close" color="primary" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  );
}
