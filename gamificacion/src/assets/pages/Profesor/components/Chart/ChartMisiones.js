import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { curso: 'Diseño de Patrones para datos estructurados', val: 3 },
  { curso: 'Algoritmos y estructura de datos', val: 4 },
  { curso: 'Técnicas algorítmicas', val: 10 },
  { curso: 'Diseño de Juegos', val: 15 },
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
            text="Misiones por curso"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
