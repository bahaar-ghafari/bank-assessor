import { Box } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { assesmentModel } from '../../Models/model';
import { OneRiskAssessment } from '../../redux/RiskAssessment/action';
import CustomTypoGraphy from '../../utils/typoGraphy/TypoGraphy';

interface IProps {
  data: assesmentModel;
}

export default function RiskAssessmentCard(props: IProps): ReactElement {
  const { bankName, deadlineDate, startDate, title, id } = props.data;
  const data = [
    {
      label: 'نام بانک',
      value: bankName,
    },
    {
      label: 'عنوان',
      value: title,
    },
    {
      label: 'زمان شروع',
      value: startDate,
    },
    {
      label: 'زمان پایان',
      value: deadlineDate,
    },
  ];
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <button
      style={{ background: 'none', border: 'none', width: '100%' }}
      onClick={() => dispatch(OneRiskAssessment(history, id))}
    >
      <Box m={1} p={2} borderColor="grey.500" borderRadius={4} boxShadow={3} color="text.secondary">
        {data.map((item: any, index: number) => (
          <Box display="flex" key={index}>
            <Box width="20%">{item.label} : </Box>
            <Box>
              <CustomTypoGraphy component="h3" label={item.value} />
            </Box>
          </Box>
        ))}
      </Box>
    </button>
  );
}
