import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import theme from 'styles/theme';
const { colors } = theme;

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
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

export const TopDecadesChart: React.FC<chartArr> = (props) => {
  let pieColorsArray: any[] = [];
  props.chartArray.forEach((decade, index) =>
    pieColorsArray.push(
      `rgba(42, 184, 89, ${(index + 1) * (100 / props.chartArray.length)}%)`
    )
  );

  return (
    <Doughnut
      data={{
        labels: props.chartArray.map((year: any) => year[0]),
        datasets: [
          {
            data: props.chartArray.map((year: any) => year[1] * 2),
            backgroundColor: pieColorsArray,
            borderWidth: 0,
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          legend: {},
        },
      }}
    />
  );
};
