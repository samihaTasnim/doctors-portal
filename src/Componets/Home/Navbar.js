import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        {/* show the below link when the device is small */}
        {/* <a className="navbar-brand" href="..">Navbar</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item mx-2">
              <a className="nav-link active" aria-current="page" href="..">Home</a>
            </li>
            <li className="nav-item mx-2"> 
              <a className="nav-link active" aria-current="page" href="..">About</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link active text-white" aria-current="page" href="..">Dental services</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link active text-white" aria-current="page" href="..">Reviews</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link active text-white" aria-current="page" href="..">Blog</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link active text-white" aria-current="page" href="..">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;