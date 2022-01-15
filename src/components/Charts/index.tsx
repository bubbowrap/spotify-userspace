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
  data: any[];
}

export const TopGenreChart: React.FC<chartArr> = ({ data }) => {
  // make array for top genres
  const topGenresArray = () => {
    const genreObject = data
      ?.flatMap((artist: any) =>
        artist.genres.flatMap((genre: string) => genre)
      )
      .reduce((prev: any, curr: any) => {
        prev[curr] = (prev[curr] || 0) + 1;
        return prev;
      }, {});
    let genreArray = [];
    for (let genre in genreObject) {
      genreArray.push([genre, genreObject[genre]]);
    }
    return genreArray.sort((a, b) => b[1] - a[1]).slice(0, 10);
  };

  return (
    <Bar
      data={{
        labels: topGenresArray().map((genre: any) => genre[0]),
        datasets: [
          {
            data: topGenresArray().map((genre: any) => genre[1]),
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

export const TopDecadesChart: React.FC<chartArr> = ({ data }) => {
  // make array for top decades
  const topDecadesArray = () => {
    const yearObject = data
      ?.flatMap((track: any) => track.album.release_date.slice(0, 4))
      .map((year) => year.slice(0, 3))
      .reduce((prev: any, curr: any) => {
        prev[curr] = (prev[curr] || 0) + 1;
        return prev;
      }, {});
    let yearArray = [];
    for (let year in yearObject) {
      yearArray.push([`${year}0s`, yearObject[year]]);
    }

    return yearArray.sort((a, b) => a[1] - b[1]);
  };

  let pieColorsArray: any[] = [];
  data.forEach((decade, index) =>
    pieColorsArray.push(
      `rgba(42, 184, 89, ${(index + 1) * (100 / topDecadesArray().length)}%)`
    )
  );

  return (
    <Doughnut
      data={{
        labels: topDecadesArray().map((year: any) => year[0]),
        datasets: [
          {
            data: topDecadesArray().map((year: any) => year[1] * 2),
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
