import React from 'react';
import Navbar from './Navbar/Navbar';

class Header extends React.Component {

    render() {
        return (
            <header>
                <div className="wrapper">
                    <div className="header-top">
                        <img src="./img/Logo2.jpg" alt="logo" />
                        <div className="search-bar">
                            <input type="text" id="search" />
                            <i class="fas fa-search"></i>
                        </div>
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <hr />
                    <div className="header-bottom">
                        <Navbar links={this.props.categories} />
                    </div>
                </div>
            </header>

        );
    }

}


export default Header