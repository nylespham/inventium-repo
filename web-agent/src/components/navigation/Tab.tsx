export default function Tab() {
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Exports</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Imports</a>
            </li>
        </ul>
    )
}