import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsRipple</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className="nav-item">
                                        <Link className="dropdown-item" aria-current="page" to="/business">business</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="dropdown-item" aria-current="page" to="/entertainment">entertainment</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="dropdown-item" aria-current="page" to="/health">health</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="dropdown-item" aria-current="page" to="/science">science</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="dropdown-item" aria-current="page" to="/sports">sports</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="dropdown-item" aria-current="page" to="/technology">technology</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
