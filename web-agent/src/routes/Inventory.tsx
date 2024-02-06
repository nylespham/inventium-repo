import ColumnChart from "../components/charts/BarChart";
import Header from "../components/navigation/Header";
import SideBar from "../components/navigation/Sidebar";
import RecordHistory from "../components/tables/RecordHistory";
import Tab from "../components/navigation/Tab";
import { NavLink } from "react-router-dom";

export default function Iventory(){
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <SideBar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Inventory</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group me-2">
                                <NavLink to="/inventory/exports/new" type="button" className="btn btn-sm btn-primary">Export Inventory</NavLink>
                                <NavLink to="/inventory/imports/new" type="button" className="btn btn-sm btn-dark">Import Inventory</NavLink>
                            </div>
                            <button id="graph" type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
                                <svg className="bi"><use xlinkHref="#calendar3"/></svg>
                                This week
                            </button>
                            </div>
                        </div>
                        
                        <ColumnChart />
                        <hr className="example-divider"/>
                        <Tab />
                        <RecordHistory 
                            title="Today's Inventory Exports"
                            headers={["ExportID", "PosID", "Product", "Created Date", "Status", "Quantity", "Unit"]}
                            data={["EXP/POS004/001", "001", "Condensed Milk", "2024/02/06",<span className="badge text-bg-info">Processing</span>, 20,"units"]}
                        />
                    </main>
                </div>
            </div>

        </>
    )
}