import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    success: {
      backgroundColor: 'green',
    },
    grey: {
      backgroundColor: 'grey',
    },
  })
);

export default useStyles;
