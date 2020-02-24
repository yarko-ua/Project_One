import React from 'react';
import { connect } from 'react-redux';
import { FilterPrice } from '../../actions/actions';

function Home(props) {

    // const { content } = props.filter;
    const { FilterPrice } = props;
    const newContent = 'Lowest';

    return (
        <section className="home">
            <div className="wrapper">
                <h1 className="mainTitle">Hello world</h1>
                <button
                    onClick={() => FilterPrice(newContent)}
                >Show</button>
                <h2>{props.filter.price}</h2>
            </div>
        </section>
    );
}
const mapState = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
    FilterPrice: content => dispatch(FilterPrice(content))
});
export default connect(mapState, mapDispatchToProps)(Home)