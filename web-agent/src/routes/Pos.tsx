import Header from "../components/Header";
import SideBar from "../components/Sidebar";
import RecordHistory from "../components/RecordHistory";
import Chart from "../components/Chart";

export default function Pos(){
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <SideBar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Your POS</h1>
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

                        {/* <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas> */}
                        <Chart />
                        <RecordHistory 
                        title="POS's List"/>
                    </main>
                </div>
            </div>

        </>
    )
}