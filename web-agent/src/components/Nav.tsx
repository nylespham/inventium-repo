import { NavLink } from "react-router-dom";

export default function Nav(){
    return (
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item"><NavLink to={"/dashboard"} className="nav-link">Dashboard</NavLink></li>
            <li className="nav-item"><NavLink to={"/inventory"} className="nav-link">Iventory</NavLink></li>
            <li className="nav-item"><NavLink to={"/pos"} className="nav-link">POS</NavLink></li>
            <li className="nav-item"><NavLink to={"/report"} className="nav-link">Report</NavLink></li>
          </ul>
        </header>
    )
}