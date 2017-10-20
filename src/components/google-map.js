import React from 'react';

export default class GoogleMap extends React.Component {
  componentDidMount() {
    const start = new google.maps.LatLng(this.props.startLat,this.props.startLon);
    const finish = new google.maps.LatLng(this.props.finLat,this.props.finLon);
    const middle = new google.maps.LatLng(this.props.midLat,this.props.midLon);
    const options = {center: middle, zoom: 8};
    const trailMap = new google.maps.Map(this.refs.map, options);

    const trailPath = new google.maps.Polyline({
      path: [start, finish],
      strokeColor: "#CC0099",
      strokeWeight: 2
    });
    trailPath.setMap(trailMap);
  }

  componentWillReceiveProps(nextProps) {
    const start = new google.maps.LatLng(nextProps.startLat,nextProps.startLon);
    const finish = new google.maps.LatLng(nextProps.finLat,nextProps.finLon);
    const middle = new google.maps.LatLng(nextProps.midLat,nextProps.midLon);
    const options = {center: middle, zoom: 8};
    const trailMap = new google.maps.Map(this.refs.map, options);

    const trailPath = new google.maps.Polyline({
      path: [start, finish],
      strokeColor: "#CC0099",
      strokeWeight: 2
    });
    trailPath.setMap(trailMap);
  }

  render() {
    return (
      <div ref="map" className="map" />
    );
  }
}


/*new google.maps.Map(this.refs.map, {
  zoom: 10,
  center: {
    lat: this.props.startLat,
    lng: this.props.startLon
  }
});*/
