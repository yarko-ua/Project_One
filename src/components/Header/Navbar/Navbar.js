import React from 'react';

function Navbar(props) {

    return (
        <nav>
            <ul>
                {props.links.map(item => (
                    <li key={item} className="navbar-item">
                        <a href={'#' + item}>
                            {item}
                        </a>
                    </li>
                ))
                }
            </ul >
        </nav>
    );

}

export default Navbar