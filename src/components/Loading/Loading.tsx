import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Box, Dialog } from '@material-ui/core';
import tarbiatModarresLogo from '../../assets/img/modarres.jpg';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function Loading() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Dialog maxWidth="lg" open={true}>
      <Box p={14}>
        {/* <img width="164px" src={tarbiatModarresLogo} alt="tarbiat_modarres_uni_logo" /> */}
        <Box my={2}>لطفا منتظر بمانید</Box>
        <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
      </Box>
    </Dialog>
  );
}
