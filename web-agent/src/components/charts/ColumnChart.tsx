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
import { faker } from "@faker-js/faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function ColumnChart(){
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Top Most Exported Ingredients',
          },
        },
      };
      
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
    const data = {
        labels,
        datasets: [
          {
            label: "Coffee",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 4 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: "Condensed Milk",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 5 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: "Fresh Milk",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 4 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
    };

    return <Bar options={options} data={data} />
}


