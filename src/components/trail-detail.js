import React from 'react';
import GoogleMap from './google-map.js'

const TrailDetail = props => {
  const name = props.location.state.name;
  const access = props.location.state.access;
  const complete = props.location.state.complete;
  const connect = props.location.state.connect;
  const description = props.location.state.description;
  const distance = props.location.state.distance;
  const finish = props.location.state.finish;
  const landscape = props.location.state.landscape;
  const level = props.location.state.level;
  const moreInfo = props.location.state.moreInfo;
  const province = props.location.state.province;
  const stageDistances = props.location.state.stageDistances;
  const stages = props.location.state.stages;
  const start = props.location.state.start;
  const title = props.location.state.title;
  const comfort = props.location.state.comfort.map(option => {
    return option;
  });
  const startLat = props.location.state.startLat;
  const startLon = props.location.state.startLon;
  const finLat = props.location.state.finLat;
  const finLon = props.location.state.finLon;
  const middleLat = props.location.state.middleLat;
  const middleLon = props.location.state.middleLon;
  //console.log(props.location.state);

  return (
    <div className="detail-container">
      <h2>{name}</h2>
      <div className="detail-text-map-container">
        <div className="detail-text">
          <p className="descript-header">Description</p>
          <p>{description}</p>
          <p>Landscape: {landscape}</p>
          <p>Access the trail from: {access}</p>
          <p>{complete}</p>
          <p>For more information, please visit the <a href={moreInfo}>trail website</a>.</p>
        </div>
        <GoogleMap startLat={startLat} startLon={startLon}
         finLat={finLat} finLon={finLon}
         midLat={middleLat} midLon={middleLon} />
      </div>
      <p className="facts-header">Key Facts</p>
      <div className="detail-facts">
        <ul>
          <li><span>Province</span><br/>{province}</li>
          <li><span>Start</span><br/>{start}</li>
          <li><span>Finish</span><br/>{finish}</li>
        </ul>
        <ul>
          <li><span>Total distance</span><br/>{distance}</li>
          <li><span>Time needed</span><br/>{props.location.state.duration.map(option => {
            return option + " ";
          })}</li>
          <li><span>Level of difficulty</span><br/>{level}</li>
        </ul>
        <ul>
          <li><span>Comfort</span><br/>{props.location.state.comfort.map(option => {
            return option + " ";
          })}</li>
          <li><span>Major connecting trails</span><br/>{connect}</li>
        </ul>
        <ul>
          <li><span>Stage distances</span><br/>{stageDistances}</li>
          <li><span>Number of stages</span><br/>{stages}</li>
        </ul>
      </div>
    </div>
  );
}

export default TrailDetail;
