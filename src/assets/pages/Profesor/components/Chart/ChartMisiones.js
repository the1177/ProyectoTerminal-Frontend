import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { curso: 'Entregado', val: 5 },
  { curso: 'No entregado', val: 1 },
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="val"
            argumentField="curso"
            innerRadius={0.7}
          />
          <Title
            text="Porcentaje de cumplimiento"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
