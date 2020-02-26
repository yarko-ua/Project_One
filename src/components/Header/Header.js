import React from 'react';
import Navbar from './Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Search } from './../../actions/actions'
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
                            <input type="text" id="search"
                                value={this.props.filter.search}
                                onChange={(e) => this.props.Search(e.target.value)}
                            />
                            <i className="fas fa-search"></i>
                        </div>
                        <NavLink to="/cart">
                            <div className="shopping-cart">
                                {this.props.cart.shoppingCart.length !== 0 &&
                                    <div className="shopping-cart__count">
                                        {this.props.cart.shoppingCart.length}
                                    </div>
                                }
                                <i className="fas fa-shopping-cart"></i>
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                        </NavLink>
                    </div>
                    <hr />
                    <div className="header-bottom">
                        <Navbar links={this.props.categories} />
                        <span className="currency">
                            {/* <i className="fas fa-hryvnia"></i> */}
                            {/* <i className="fas fa-dollar-sign"></i> */}
                        </span>
                    </div>
                </div>
            </header>

        );
    }

}


const mapState = props => ({ ...props })
const mapDispatchToProps = dispatch => ({
    Search: content => dispatch(Search(content)),
});
export default connect(mapState, mapDispatchToProps)(Header);