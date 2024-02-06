import SideBar from "../components/navigation/Sidebar"
import Header from "../components/navigation/Header"
import ReportForm from "./report/ReportForm"

export default function Report(){
    return (
            <>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <SideBar />
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <ReportForm />
                            </div>
                            
                        </main>
                    </div>
                </div>
    
            </>
    )
}