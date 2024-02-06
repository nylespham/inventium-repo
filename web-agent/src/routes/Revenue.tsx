import Header from "../components/navigation/Header";
import SideBar from "../components/navigation/Sidebar";
import RecordHistory from "../components/tables/RecordHistory";
import ScatterChart from "../components/charts/ScatterChart";
import PieChart from "../components/charts/PieChart";

export default function Revenue(){
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <SideBar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Revenue</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group me-2">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                            </div>
                            <button id="graph" type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
                                <svg className="bi"><use xlinkHref="#calendar3"/></svg>
                                This week
                            </button>
                            </div>
                        </div>
                        
                        <ScatterChart />
                        <hr className="example-divider"/>
                        <RecordHistory 
                            title="Today's Inventory Exports"
                            headers={["Test", "Dump", "Test", "Test", "Test"]}
                            data={[1000,2656,34545,4353,5535]}
                        />
                        <hr className="example-divider"/>
                        {/* <PieChart /> */}
                    </main>
                </div>
            </div>

        </>
    )
}