import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">News Recommender</Link>
      <div>
        <Link className="btn btn-outline-light me-2" to="/">Home</Link>
        {/* Removed Recommendations link from navbar */}
      </div>
    </div>
  </nav>
);

export default Navbar;
