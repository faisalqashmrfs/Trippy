import { Link } from 'react-router-dom';
import './Navbar.css'
import { FaHome } from "react-icons/fa";
import { useState } from 'react';

export default function Navbar() {

  const [Toglle, setToglle] = useState(true);

  return (
    <nav className='Fq-Navbar'>
      <div>
        <h1>Trippy</h1>
      </div>
      <div className={!Toglle ? 'section-2' : 'section-4'}>
        <ul className='Menu'>
          <li>
            <Link to={'/'}>
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link to={'/about'}>
              <FaHome />
              About
            </Link>
          </li>
          <li>
            <Link to={'/Service'}>
              <FaHome />
              Service
            </Link>
          </li>
          <li>
            <Link to={'/Contact'}>
              <FaHome />
              Contact
            </Link>
          </li>
        </ul>
        <button>Sign Up</button>
        <button className='ClosenBTN' onClick={() => setToglle(true)}>Close</button>

      </div>
      <div className='section-3'>
        <button onClick={() => setToglle(false)}>
          <FaHome />
        </button>
      </div>
    </nav>
  )
}
