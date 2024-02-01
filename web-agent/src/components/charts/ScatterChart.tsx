import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function ScatterChart(){
    const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        title: {
            display: true,
            text: "Most revenue made by POS",
        },
    };

    const data = {
        datasets: [
          {
            label: "POS ID: 901298",
            data: Array.from({ length: 100 }, () => ({
              x: faker.datatype.number({ min: 0, max: 100 }),
              y: faker.datatype.number({ min: 0, max: 100 }),
            })),
            backgroundColor: "rgba(255, 99, 132, 1)",
          },
        ],
    };

    return <Scatter options={options} data={data} />;

}