import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { ResetFilter } from './../../../actions/actions'
function Navbar(props) {

    return (
        <nav>
            <ul>
                {props.links.map(item => (
                    <li key={item} className="navbar-item">
                        <NavLink
                            onClick={() => props.ResetFilter()}
                            exact to={item === 'home' ? `/` : `/${item}`}
                        >
                            {item}
                        </NavLink>
                    </li>
                ))
                }
            </ul >
        </nav>
    );

}

const mapState = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
    ResetFilter: () => dispatch(ResetFilter()),

});
export default connect(mapState, mapDispatchToProps)(Navbar)