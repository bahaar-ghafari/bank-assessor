import { Box, Grid } from '@material-ui/core';
import React, { ReactElement } from 'react';
import CustomTypoGraphy from '../../utils/typoGraphy/TypoGraphy';

interface Props {
  data: { key: string; value: string; key2: string, value2: string, title: string }[];
  renderAction?: any;
}

export default function AssessorFullResponsedItems({ data, renderAction }: Props): ReactElement {
  return (
    <Grid container spacing={3}>
      {data.map((item) => (
        <Grid item xs={12}>
          <Box
            m={1}
            p={2}
            borderColor="grey.500"
            borderRadius={4}
            boxShadow={3}
            color="text.secondary"
          >
            <Box display="flex" mb={3}>
              <Box alignItems="center" width="10%" display="flex">
                عنوان :{' '}
              </Box>
              <CustomTypoGraphy component="h3" label={item.title} />
            </Box>
            <Box display="flex" mb={3}>
              <Box alignItems="center" width="10%" display="flex">
                {item.key} :{' '}
              </Box>
              <CustomTypoGraphy component="h3" label={item.value} />
            </Box>
            <Box display="flex" mb={3}>
              <Box alignItems="center" width="10%" display="flex">
                {item.key2} :{' '}
              </Box>
              <CustomTypoGraphy component="h3" label={item.value2} />
            </Box>

            {renderAction ? renderAction(item) : null}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
