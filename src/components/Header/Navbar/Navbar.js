import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {

    return (
        <nav>
            <ul>
                {props.links.map(item => (
                    <li key={item} className="navbar-item">
                        <NavLink to={`/${item}`}>
                            {item}
                        </NavLink>
                    </li>
                ))
                }
            </ul >
        </nav>
    );

}

export default Navbar