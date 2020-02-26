import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        };
    }


    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        // const mapStyles = {
        //     width: '100%',
        //     height: '100%',
        // }
        return (
            <Map google={this.props.google}
                zoom={12}
                style={{ width: '100%', height: '100%', position: 'relative' }}
                className={'map'}
                initialCenter={{ lat: 45.52170255, lng: 32.69469291 }}
                onClick={this.onMapClicked}
            >
                <Marker onClick={this.onMarkerClick}
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SnowyStore'}
                    position={{ lat: 45.52170255, lng: 32.69469291 }}
                    icon={{
                        url: "'https://cdn1.iconfinder.com/data/icons/vegetables-1-flat/33/beetrot-512.png",
                        // anchor: new google.maps.Point(32, 32),
                        // scaledSize: new google.maps.Size(64, 64)
                    }}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBZSFNoes5FJvhoj0XQ_97-2oxvE7F3tfw')
})(MapContainer);

