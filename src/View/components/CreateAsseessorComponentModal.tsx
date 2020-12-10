import { Dialog, DialogContent } from '@material-ui/core';
import React, { ReactElement } from 'react';
import CustomButton from '../../utils/buttons/Button';
import CustomTextField from '../../utils/inputs/TextField';
import CustomTypoGraphy from '../../utils/typoGraphy/TypoGraphy';

type IProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  onHandleChange: any;
  onHandleSubmit: any;
};

export default function CreateAsseessorComponentModal(props: IProps): ReactElement {
  const { open, onClose, title, onHandleChange, onHandleSubmit } = props;

  return (
    <Dialog maxWidth="xl" open={open} onClose={onClose}>
      <DialogContent>
        <div dir="rtl">
          <CustomTypoGraphy component="h1" variant="h5" label="تعریف مولفه ارزیابی " />
          <form>
            <CustomTextField
              width="20%"
              variant="outlined"
              margin="normal"
              required={true}
              fullWidth={true}
              id="title"
              label="عنوان"
              name="title"
              autoComplete="title"
              autoFocus={true}
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onHandleChange(e.target.name, e.target.value)
              }
            />
            <CustomButton
              type="submit"
              fullWidth={true}
              variant="contained"
              color="primary"
              label="ثبت"
              onClickFunction={(e: React.ChangeEvent<HTMLInputElement>) => onHandleSubmit(e)}
            />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
