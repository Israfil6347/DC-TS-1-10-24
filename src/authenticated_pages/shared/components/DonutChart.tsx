import {
  ArcElement,
  Chart,
  ChartOptions,
  Colors,
  Legend,
  Tooltip,
} from 'chart.js';
import 'chartjs-plugin-datalabels';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { DonutChartData } from '../interfaces/DonutChartData';

interface DountCharPropType {
  data: DonutChartData[];
}

Chart.register(ArcElement, Tooltip, Legend, Colors, ChartDataLabels);

const DonutChart = ({ data }: DountCharPropType) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const donutData = {
    labels: data?.map((item) => item.name),

    datasets: [
      {
        data: data?.map((item) => {
          return item.value;
        }),
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const options: ChartOptions = {
    plugins: {
      datalabels: {
        color: 'white',
        font: {
          size: windowSize > 750 ? 16 : 10,
        },
        formatter: function (value) {
          return `${Intl.NumberFormat().format(value)} ৳`;
        },
      },
      colors: {
        forceOverride: true,
      },
      legend: {
        // position: windowSize > 750 ? 'right' : 'top',
        position: 'bottom',
        align: 'start',
        fullSize: true,
        textDirection: 'ltr',
        labels: {
          padding: 12,
          boxHeight: 18,
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Balance: ${context.formattedValue} ৳`;
          },
        },
      },
    },
  };

  return <Doughnut data={donutData} options={options}></Doughnut>;
};

export default DonutChart;
