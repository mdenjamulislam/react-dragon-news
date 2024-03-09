import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const GoogleMap = () => {
    const defaultProps = {
        center: {
            lat: 23.766611054567374,
            lng: 90.41465488204747
        },
        zoom: 11
    }; 
    return (
        <div>
            <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyBvFZ34Q6xAEeWygwLQCtlMuMbBCa0BvrE' }} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
                <AnyReactComponent lat={23.766611054567374} lng={90.41465488204747} text="My Marker" />
            </GoogleMapReact>
        </div>
    );
};

export default GoogleMap;
