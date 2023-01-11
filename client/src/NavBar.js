import React from 'react'
import {Link} from 'react-router-dom';

function NavBar (){
    return(
        <div>
            <nav className='NavBar'>
                <ul>
                    <li>
                        <Link to='/enroll'>Enroll</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/checking'>Checking</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar