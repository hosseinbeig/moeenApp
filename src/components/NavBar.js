import React, { Component } from 'react';
import logo from '../../src/media/images/logo.jpg';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <nav className="">
        <img src={logo} alt="اطلس کویر" style={{ width: '130px' }} />

        <div>
          <ul>
            <li>
              <Link to="/">
                خانه <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                درباره ما
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Product">
                محصولات
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contacts">
                ارتباط با ما
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
