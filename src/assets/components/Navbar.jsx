import React from 'react';
import  {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="container">
            <ul className="rigth-part">
                <li><Link to="/">Posts</Link></li>
            </ul>
            <ul className='left-part'>
                
                <li><Link to="/signin">sign in</Link></li>
                <li><Link to="/login">log in</Link></li>
               
                <li>log out</li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;