import React from 'react'
import {Link} from 'react-router-dom';

function NavBar (){
    return(
        <div>
            <nav class="navbar navbar-expand bg-primary">
                <div class= "container">
                <ul class="navbar-nav" >
                    <li class="nav-item">
                        <Link to='/enroll' class="nav-link ps-5 pe-5 ms-5 text-white">Enroll</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/login' class="nav-link ps-5 pe-5 text-white">Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/checking' class="nav-link ps-5 pe-5 text-white">Checking</Link>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar