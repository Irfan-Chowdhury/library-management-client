import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        // <div>
        //     <Link to="/tasks">Task</Link>
        //     <Link to="/users">Users</Link>
        // </div>
        // <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Library</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link active" to="#">Home <span className="sr-only">(current)</span></Link>
                            <Link className="nav-item nav-link" to="#">Features</Link>
                            <Link className="nav-item nav-link" to="#">Pricing</Link>
                            <Link className="nav-item nav-link disabled" to="#">Disabled</Link>
                        </div>
                    </div>
                    {/* <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            <Link className="nav-link" to="/books">All Books</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/create-book">Add Book</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/borrow-summary">Borrow Summary</Link>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>
        // </>
    );
};

export default Navbar;