import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 45.52170255,
            lng: 32.69469291
        },
        zoom: 14
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '650px', width: '100%', position: 'relative' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBZSFNoes5FJvhoj0XQ_97-2oxvE7F3tfw' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={45.52170255}
                        lng={32.69469291}
                        text="Snowy Store"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;


