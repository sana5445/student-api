import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#ad7c0be1' }}>
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bold" href="#">STUDENT APP</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav d-flex flex-row gap-3">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">ADD STUDENT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/search">SEARCH STUDENT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/delete">DELETE STUDENT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/view"> VIEW ALL STUDENTS</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default UserNavbar;
