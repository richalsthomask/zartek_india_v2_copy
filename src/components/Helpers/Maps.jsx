import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import React from "react";

const mapStyles = {
  width: "97%",
  height: "90%",
  margin: "auto",
  borderRadius: "10px",
};

class GMaps extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    return (
      <React.Fragment>
        <Map
          google={this.props.google}
          zoom={17}
          fullscreenControl={false}
          mapTypeControl={false}
          streetViewControl={false}
          zoomControl={false}
          style={mapStyles}
          initialCenter={{
            lat: 10.055788,
            lng: 76.354342,
          }}
        >
          <Marker onClick={this.onMarkerClick} label="Zartek Technologies" />
        </Map>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAtG22nr-9ODYaQ6kpc9hsz3xQZkEEjrGY",
})(GMaps);
