import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import theme from 'styles/theme';
const { colors } = theme;

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface chartArr {
  chartArray: any[];
}

export const TopGenreChart: React.FC<chartArr> = (props) => {
  return (
    <Bar
      data={{
        labels: props.chartArray.map((genre: any) => genre[0]),
        datasets: [
          {
            data: props.chartArray.map((genre: any) => genre[1]),
            backgroundColor: `${colors.green}`,
          },
        ],
      }}
      options={{
        indexAxis: 'y' as const,
        responsive: true,
        scales: {
          y: {
            ticks: {
              color: `${colors.lightGrey}`,
              stepSize: 1,
            },
            grid: {
              display: false,
            },
          },
          x: {
            grid: {
              display: false,
              color: `${colors.darkestGrey}`,
            },
            ticks: {
              color: `${colors.lightGrey}`,
              stepSize: 1,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};
