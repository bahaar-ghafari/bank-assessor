import {Box} from '@material-ui/core';
import React from 'react';
import CustomButton from '../utils/buttons/Button';

export const HandleViewElement = (
    data: any,
    historyPath: null | "created" | "submitted" | "getResponse" | "getGeneralResponse" | "checkBankResponse" | "checkAllResponse" | 'getReport',
    list: any[],
    classes: { submit: string | undefined },
    handleShowAssessmentItems: (arg0: any) => any) => {
    return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <CustomButton
        disabled={list && list.length ? false : true}
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submit}
        label={handleLabelName(historyPath)}
        onClickFunction={() => handleShowAssessmentItems(data)}
      />
    </Box>
  );
};

function handleLabelName(historyPath: null | "created" | "submitted" | "getResponse" | "getGeneralResponse" | "checkBankResponse" | "checkAllResponse" | 'getReport', ): string {
    switch (historyPath) {
        case "created":
            return "مشاهده مولفه ها";
        case "submitted":
            return "مشاهده مولفه ها";
        case "getResponse":
            return "پاسخ دهی"
        case "checkBankResponse":
            return "مشاهده پاسخ بانک"
        case "getGeneralResponse":
            return "پاسخ دهی"
        case "checkAllResponse":
            return "مشاهده پاسخ ها"
        case "getReport":
            return "مشاهده گزارش"
        default:
            return "مولفه ها"
    }
}
