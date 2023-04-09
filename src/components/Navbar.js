import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    let { title } = props;
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
                <a className="navbar-brand mx-3" href="#">{title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/">General</Link></li>
                                <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                                <li><Link className="dropdown-item" to="/science">Science</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}


export default Navbar;