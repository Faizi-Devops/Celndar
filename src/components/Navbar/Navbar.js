import Routing from "../../routing/Routing";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Authentication</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="signUp" className="nav-link" aria-current="page">Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="signIn" className="nav-link">Sign in</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="Student" className="nav-link">Student Management</Link>
                            </li>
                            
                           
                        </ul>
                       
                    </div>
                </div>
            </nav>


        </div>
    )
}
export default Navbar;