import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const mapStyles = {

  map: {
    width: '725px',
    height: '300px',
    float: "right",
    "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    mapTypeId: 'satellite'
  }
};
export class CurrentLocation extends React.Component {
    constructor(props) {
    super(props);
    
  }
      state = {
      currentLocation: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    }
  componentDidMount() {
   
    // if (this.props.centerAroundCurrentLocation) {
    //   if (navigator && navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(pos => {
    //       const coords = pos.coords;
    //       this.setState({
    //         currentLocation: {
    //           lat: coords.latitude,
    //           lng: coords.longitude
    //         }
    //       });
    //     });
    //   }
    // }
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // checks if google is available
      const { google } = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;

      // reference to the actual DOM element
      const node = ReactDOM.findDOMNode(mapRef);
      let { zoom } = this.props;
      const { lat, lng } = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );
      // maps.Map() is constructor that instantiates the map
      this.map = new maps.Map(node, mapConfig);
    }
  }

  recenterMap() {
    const map = this.map;
    const current = this.state.currentLocation;
    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(current.lat, current.lng);
      map.panTo(center);
    }
  }

  renderChildren() {
    const { children } = this.props;

    if (!children) return;
    return React.Children.map(children, c => {
      if (!c) return;
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    });
  }

  render() {
    const style = Object.assign({}, mapStyles.map);

    return (
      <div className="col-xs-9">
        <div style={style} ref='map'>
          Loading map...
        </div>
        {this.renderChildren()}
      </div>
    );
  }
}
export default CurrentLocation;

CurrentLocation.defaultProps = {
  
  zoom: 16,
  initialCenter: {
    lat: 35.227085,
    lng: -80.843124
  },
  centerAroundCurrentLocation: false,
  visible: true
};