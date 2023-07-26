import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {/* <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">    */}
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Database GUI App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/addUser" className="btn btn-outline-light">Add User</Link>
                </div>
            </nav>
        </div>
    )
}
