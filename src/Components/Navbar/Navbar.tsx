import './Navbar.css';
import gdsclogo from './../../assets/images/gdsclogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <img src={gdsclogo} alt="logo" className="gdsclogo" />
            <ul className="navlinks">
                <Link to="/">
                    <li className="navlink">About us</li>
                </Link>
                <Link to="/events">
                    <li className="navlink">Events</li>
                </Link>
                <Link to="/resources">
                    <li className="navlink">Resources</li>
                </Link>
                <Link to="/team">
                    <li className="navlink">Team</li>
                </Link>
                <Link to="/oppurtunities">
                    <li className="navlink">Opportunities</li>
                </Link>
                <Link to="/joinus">
                    <button className="btn">Join us</button>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;
