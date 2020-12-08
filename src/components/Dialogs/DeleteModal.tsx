import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
type IProps = {
  open: boolean;
  onClose: () => void;
  deleteFunc: any;
};
export default function DeleteModal(props: IProps) {
  const { open, onClose, deleteFunc } = props;
  return (
    <Dialog
      maxWidth="lg"
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          آیا برای حذف اطمینان دارید؟
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>خیر</Button>
        <Button onClick={deleteFunc} autoFocus>
          بله
        </Button>
      </DialogActions>
    </Dialog>
  );
}
