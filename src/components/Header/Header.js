import React from 'react';
import Navbar from './Navbar/Navbar';

class Header extends React.Component {

    render() {
        return (
            <header>
                <div className="wrapper">
                    <div className="header-top">
                        <div className="logo">
                            <img src="./img/Logo3.jpg" alt="logo" className="logo__img" />
                            <h1>Snowy Store</h1>
                        </div>
                        <div className="search-bar">
                            <input type="text" id="search" />
                            <i className="fas fa-search"></i>
                        </div>
                        <div className="shopping-cart">
                            <i className="fas fa-shopping-cart"></i>
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                    </div>
                    <hr />
                    <div className="header-bottom">
                        <Navbar links={this.props.categories} />
                        <span className="currency">
                            <i class="fas fa-hryvnia"></i>
                            <i class="fas fa-dollar-sign"></i>
                        </span>
                    </div>
                </div>
            </header>

        );
    }

}


export default Header