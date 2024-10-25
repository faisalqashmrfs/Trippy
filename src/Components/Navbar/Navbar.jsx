import './Navbar.css'
import { FaHome } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className='Fq-Navbar'>
      <div>
        <h1>Trippy</h1>
      </div>
      <div className='section-2'>
        <ul className='Menu'>
          <li>
            <FaHome />
            Home
          </li>
          <li>
            <FaHome />
            About
          </li>
          <li>
            <FaHome />
            Service
          </li>
          <li>
            <FaHome />
            Contact
          </li>
        </ul>
        <button>Sign Up</button>
      </div>
    </nav>
  )
}
