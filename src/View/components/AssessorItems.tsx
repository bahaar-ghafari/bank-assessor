import { Box, Grid } from '@material-ui/core';
import React, { ReactElement } from 'react';
import CustomTypoGraphy from '../../utils/typoGraphy/TypoGraphy';

interface Props {
  data: { key: string; value: string }[];
  renderAction?: any;
}

export default function AssessorItems({ data, renderAction }: Props): ReactElement {
  return (
    <Grid container spacing={3}>
      {data.map((item) => (
        <Grid item xs={12} md={6} lg={4}>
          <Box
            m={1}
            p={2}
            borderColor="grey.500"
            borderRadius={4}
            boxShadow={3}
            color="text.secondary"
          >
            <Box display="flex">
              <Box mb={3} width="20%" display="flex">
                {item.key} :{' '}
              </Box>
              <CustomTypoGraphy component="h3" label={item.value} />
            </Box>

            {renderAction ? renderAction() : null}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
