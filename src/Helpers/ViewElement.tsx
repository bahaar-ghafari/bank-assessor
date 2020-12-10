import { Box } from '@material-ui/core';
import React from 'react';
import CustomButton from '../utils/buttons/Button';

export const HandleViewElement = (
  data: any,
  list: any[],
  classes: { submit: string | undefined },
  handleShowAssessmentItems: (arg0: any) => any,
) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <CustomButton
        disabled={list && list.length ? false : true}
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submit}
        label="مشاهده مولفه ها"
        onClickFunction={() => handleShowAssessmentItems(data)}
      />
    </Box>
  );
};
