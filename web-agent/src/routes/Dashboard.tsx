import Header from "../components/Header.tsx"
import RecordHistory from "../components/RecordHistory.tsx"
import SideBar from "../components/Sidebar.tsx"
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export default function Dashboard(){
    const labels = ["January", "February", "March", "April", "May", "June", "July"]
    const data = {
        labels,
        datasets: [
            {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.array({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.array({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    }

    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <SideBar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group me-2">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                            </div>
                            <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
                                <svg className="bi"><use xlinkHref="#calendar3"/></svg>
                                This week
                            </button>
                            </div>
                        </div>
                        <Line 
                            options={options}
                            data={data}
                            />
                        <RecordHistory />
                    </main>
                </div>
            </div>

        </>
    )
}