import React, {Component, ReactElement} from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

interface Props {
  data: { key: string; value: number; key2: string; value2: number; title: string; qbody: string }[];
  renderAction?: any;
}
type State = { chartOptions: any, hoverData: any };


export default function FullResponsedChart({ data, renderAction }: Props): ReactElement {
  return new LineChart({data, renderAction}).render();
}


class LineChart extends Component<Props, State> {
  constructor({ data, renderAction }: Props) {
    super({ data, renderAction });

    this.state = {
      // To avoid unnecessary update keep all options in the state.
      chartOptions: {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'گزارش نهایی'
        },
        xAxis: {
          categories: data.map(item => item.title),
        },
        yAxis: {
          min: '0',
          max: '100',
          title: {
            text: 'نمره ارزیابی از ۱۰۰'
          },
        },
        series: [
          {
            name: 'ارزیابی بانک',
            data: data.map(item => item.value)
          },
          {
            name: 'ارزیابی عمومی',
            data: data.map(item => item.value2)
          }
        ],
        plotOptions: {
          series: {
            point: {
              events: {
                mouseOver: this.setHoverData.bind(this)
              }
            }
          }
        }
      },
      hoverData: null
    };
  }

  setHoverData = (e: any) => {
    // The chart is not updated because `chartOptions` has not changed.
    this.setState({ hoverData: e.target.category })
  }


  render() {
    const { chartOptions, hoverData } = this.state;

    return (
        <div>
          <HighchartsReact
              highcharts={Highcharts}
              options={chartOptions}
          />
        </div>
    )
  }
}

