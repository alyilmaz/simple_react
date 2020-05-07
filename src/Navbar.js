import React from 'react';
 
const Navbar = () =>{

    return(
        <nav className='nav-wrapper cyan darken-3'>
            <div className='container'>
            <a className ="brand-logo">NAVBAR</a>
            <ul className="right">
                <li><a href="/home">Home</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;