
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import logo from '../../public/logo.png';
import imag from '../../public/profile.png';
import '../components/Navbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {
    return (

        <nav className="navbar bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">
                    <div className="icons">
                        <i className="bi bi-search px-2"></i>
                        <i className="bi bi-bell px-2"></i>
                        <i className="bi bi-gear px-2"></i>
                        <img className="rounded-circle w-25 ms-1" src={imag} alt="" />

                    </div>
                </a>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title  d-flex justify-content-center align-items-center" id="offcanvasNavbarLabel">
                            <img className="w-50" src={logo} alt="" />
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-folder-plus me-2"></i>Create
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-person-gear me-2"></i>Manage
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="bi bi-shield-exclamation me-1"></i>Administration</a>
                            </li>

                        </ul>

                    </div>
                    <div className="offcanvas-footer text-sm p-3 list-unstyled">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                <i className="bi bi-info-circle me-1"></i>Help</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">

                                <i className="bi bi-chat-left-dots me-1"></i> Chat</a>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
