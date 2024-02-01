import { NavLink } from "react-router-dom";
import inventory from "../../assets/images/inventory.png";
import report from "../../assets/images/report.png";
import pos from "../../assets/images/pos.png";
import revenue from "../../assets/images/revenue.png";
import dashboard from "../../assets/images/dashboard.png";

export default function SideBar(){
    return (
        <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
            <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabIndex={-1} id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                <ul className="nav flex-column">
                    <li className="nav-item">
                    <NavLink className="nav-link d-flex align-items-center gap-2 active" aria-current="page" to={"/dashboard"}>
                    <img src={dashboard} className="bi"></img>
                        Dashboard
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link d-flex align-items-center gap-2" to={"/pos"}>
                    <img src={pos} className="bi"></img>
                        Point of Sale
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link d-flex align-items-center gap-2" to={"/inventory"}>
                        <img src={inventory} className="bi"></img>
                        Inventory
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link d-flex align-items-center gap-2" to={"/revenue"}>
                    <img src={revenue} className="bi"></img>
                        Revenue
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link d-flex align-items-center gap-2" to={"/reports"}>
                    <img src={report} className="bi"></img>
                        Reports
                    </NavLink>
                    </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                    <span>Saved reports</span>
                    <NavLink className="link-secondary" to={"/reports/new"} aria-label="Add a new report">
                    <svg className="bi"><use xlinkHref="#plus-circle"/></svg>
                    </NavLink>
                </h6>
                <ul className="nav flex-column mb-auto">
                    <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                        <svg className="bi"><use xlinkHref="#file-earmark-text"/></svg>
                        Current month
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                        <svg className="bi"><use xlinkHref="#file-earmark-text"/></svg>
                        Last quarter
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                        <svg className="bi"><use xlinkHref="#file-earmark-text"/></svg>
                        Year-end sale
                    </a>
                    </li>
                </ul>

                <hr className="my-3"/>

                <ul className="nav flex-column mb-auto">
                    <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                        <svg className="bi"><use xlinkHref="#gear-wide-connected"/></svg>
                        Settings
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                        <svg className="bi"><use xlinkHref="#door-closed"/></svg>
                        Sign out
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}