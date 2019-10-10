import React from 'react';

//Stateless functional Component
const NavBar = (props) =>{
        console.log('NavBar - render');

        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar 
                    <span className="badge badge-pill sec">
                        {props.totalCounters}
                    </span>
                </a>
            </nav>
        );
};

export default NavBar;