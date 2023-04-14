import React from 'react'

export default function Sidebar() {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width : 280 , height : '100vh'}}>
        <a  className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          {/* <svg className="bi me-2" width="40" height="32"></svg> */}
          <i className="bi bi-bootstrap-fill bi me-2" style={{ fontSize : '32px'}}></i>
          
          <span className="fs-4">Sidebar</span>
        </a>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a    className="nav-link active" aria-current="page">
            {/* <i className="bi bi-bar-chart-steps me-2" style={{fontSize : '16px'}}></i> */}
              {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg> */}
              Home
            </a>
          </li>
          <li>
            <a    className="nav-link text-white">
              
              Dashboard
            </a>
          </li>
          <li>
            <a    className="nav-link text-white">
              {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg> */}
              Orders
            </a>
          </li>
          <li>
            <a    className="nav-link text-white">
              {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg> */}
              Products
            </a>
          </li>
          <li>
            <a    className="nav-link text-white">
              {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg> */}
              Customers
            </a>
          </li>
        </ul>
        <hr/>
       
      </div>
    )
}