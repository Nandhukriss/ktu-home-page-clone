import React from 'react';

function Navbar() {
  return (
    <div className='border-bottom border-primary border-3 flex justify-content-center  align-items-center ' style={{backgroundColor:'#f7f7f7'}}>
      <div className="mx-4">
        <nav className="navbar navbar-expand-md navbar-dark justify-content-center py-3 mb-4 " style={{backgroundColor:'#f7f7f7'}}>
          <a  className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img className='me-2' src="https://th.bing.com/th?id=OSK.900263eed244e34d38c4b8fd2313db0c&w=124&h=168&c=7&o=6&dpr=1.3&pid=SANGAM" alt="ktulogo" width={'40px'} height={'50px'} />
            <span className="fs-5 text-primary">e-Gov Platform for APJ Abdul Kalam Technological University</span>
          </a>

          <button className="navbar-toggler text-bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a  className="nav-link  text-light" aria-current="page" style={{backgroundColor:'#20bae5'}}>Home</a></li>
              <li className="nav-item"><a className="nav-link text-dark">Research</a></li>
              <li className="nav-item"><a className="nav-link text-dark">FAQ</a></li>
              <li className="nav-item"><a className="nav-link text-dark">Contact Us</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
