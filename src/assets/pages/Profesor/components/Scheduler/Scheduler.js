import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import appointments from '../Scheduler/data/today-appointments';
import Title from '../Title/Title';

const useStyles = makeStyles(theme => ({
  todayCell: {
    backgroundcolor: fade(theme.palette.primary.main, 0.1),
    '&:hover': {
      backgroundcolor: fade(theme.palette.primary.main, 0.14),
    },
    '&:focus': {
      backgroundcolor: fade(theme.palette.primary.main, 0.16),
    },
  },
  weekendCell: {
    backgroundcolor: fade(theme.palette.action.disabledBackground, 0.04),
    '&:hover': {
      backgroundcolor: fade(theme.palette.action.disabledBackground, 0.04),
    },
    '&:focus': {
      backgroundcolor: fade(theme.palette.action.disabledBackground, 0.04),
    },
  },
  today: {
    backgroundcolor: fade(theme.palette.primary.main, 0.16),
  },
  weekend: {
    backgroundcolor: fade(theme.palette.action.disabledBackground, 0.06),
  },
}));

const TimeTableCell = (props) => {
  const classes = useStyles();
  const { startDate } = props;
  const date = new Date(startDate);

  if (date.getDate() === new Date().getDate()) {
    return <WeekView.TimeTableCell {...props} className={classes.todayCell} />;
  } if (date.getDay() === 0 || date.getDay() === 6) {
    return <WeekView.TimeTableCell {...props} className={classes.weekendCell} />;
  } return <WeekView.TimeTableCell {...props} />;
};

const DayScaleCell = (props) => {
  const classes = useStyles();
  const { startDate, today } = props;

  if (today) {
    return <WeekView.DayScaleCell {...props} className={classes.today} />;
  } if (startDate.getDay() === 0 || startDate.getDay() === 6) {
    return <WeekView.DayScaleCell {...props} className={classes.weekend} />;
  } return <WeekView.DayScaleCell {...props} />;
};


export default function Schedule() {
    return (
        <Paper>
          <Title> Calendario del Curso </Title>
            <Scheduler
            data={appointments}
            height={660}
            >
            <ViewState />
            <WeekView
                startDayHour={9}
                endDayHour={19}
                timeTableCellComponent={TimeTableCell}
                dayScaleCellComponent={DayScaleCell}
            />
            <Appointments />
            </Scheduler>
        </Paper>
    );
  }