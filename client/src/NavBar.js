import React from 'react'
import {Link} from 'react-router-dom';

function NavBar (){
    return(
        <div>
            <nav class="navbar navbar-expand bg-primary">
                <div class= "container">
                <ul class="navbar-nav nav_padding">
                    <li class="nav-item">
                        <Link to='/enroll' class="nav-link text-white px-5 ms-5">Enroll</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/login' class="nav-link text-white px-5 ms-5">Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/checking' class="nav-link text-white px-5 ms-5">Checking</Link>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar