import { Dialog, DialogContent } from '@material-ui/core';
import React, { ReactElement } from 'react';
import CustomButton from '../../utils/buttons/Button';
import CustomCheckBox from '../../utils/checkBox/CheckBox';
import CustomTypoGraphy from '../../utils/typoGraphy/TypoGraphy';

type IProps = {
  open: boolean;
  onClose: () => void;
  list: { label: string; value: number; status: boolean }[];
  onHandleChange: any;
  onHandleSubmit: any;
};

export default function CreateAsseessorsListComponentModal(props: IProps): ReactElement {
  const { open, onClose, list, onHandleChange, onHandleSubmit } = props;

  return (
    <Dialog maxWidth="xl" open={open} onClose={onClose}>
      <DialogContent>
        <div dir="rtl">
          <CustomTypoGraphy component="h1" variant="h5" label="انتخاب مولفه‌های ارزیابی " />
          <form>
            {list.map((item) => (
              <div>
                <CustomCheckBox
                  value={item.value.toString()}
                  color="secondary"
                  label={item.label}
                  status={item.status}
                  handleChange={() => onHandleChange(item.value)}
                />
              </div>
            ))}
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
