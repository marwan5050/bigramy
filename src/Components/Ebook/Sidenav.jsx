import React, { useState } from 'react'
import {Link} from 'react-router-dom';

export default function Sidenav({ SelectPage }) {

    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (item) => {
        setActiveItem(item);
        SelectPage(item);
      };
  return (
    <>
   


<nav className="navbar navbar-expand-sm" style={{ backgroundColor: '#1e1e1e' }}>
        <div className="container">
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon " />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="d-block navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white fs-3"
                  to="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                <div className="dropdown-menu text-white" aria-labelledby="dropdownId">
                  <Link
                    className="dropdown-item text-white"
                    to="#"
                    style={{
                      backgroundColor: activeItem === 'Page 1-2' ? '#55e748' : '#1e1e1e',
                    }}
                    
                    onClick={(e) => { e.preventDefault(); handleItemClick('Page 1-2'); }}
                  >
                    Page 1-2
                  </Link>
                  <Link
                    className="dropdown-item text-white"
                    to="#"
                    style={{
                      backgroundColor: activeItem === 'Page 3-4' ? '#55e748' : '#1e1e1e',
                    }}
                   
                    onClick={(e) => { e.preventDefault(); handleItemClick('Page 3-4'); }}
                  >
                    Page 3-4
                  </Link>
                </div>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white fs-3"
                  to="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Bookmark
                </Link>
                <div className="dropdown-menu text-white" aria-labelledby="dropdownId">
                  <Link
                    className="dropdown-item text-white"
                    to="#"
                    style={{
                      backgroundColor: activeItem === 'Page 1-2' ? '#55e748' : '#1e1e1e',
                    }}
                    
                    onClick={(e) => { e.preventDefault(); handleItemClick('Page 3'); }}
                  >
                    Page 3
                  </Link>
                  
                </div>
              </li>
            </ul>

            
          </div>
        </div>
      </nav>

    
    </>
  )
}
