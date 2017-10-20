import React from 'react';
import { Link } from 'react-router-dom';

import helpers from '../utils/helpers';
import { capitalize } from '../utils/helpers';
import TrailDetail from './trail-detail';

const ResultsItem = props => {
  const name = props.data.name;
  const distance = props.data.distance;
  const title = props.data.title;

  return (
    <div>
    <span className="arrow-icon">♣</span>
    <h3>{name}</h3>
    <p>Total Distance: {distance}</p>
    <p>{title}</p>
    </div>
  );
}

const ResultsList = props => {
  let data = props.list;
  let list = data;

  if (props.prov.length >= 1) {
    list = list.filter(trail => {
      return trail.province === props.prov;
    });
  }

  if (props.day.length >= 1) {
    list = list.filter(trail => {
      return trail.duration.includes(props.day);
    });
  }

  if (props.level.length >= 1) {
    list = list.filter(trail => {
      return props.level.includes(trail.level);
    });
  }

  if (props.comfort.length >= 1) {
    list = list.filter(trail => {
      return trail.comfort.includes(props.comfort);
    });
  }

  if (props.services.length >= 1) {
    list = list.filter(trail => {
      return trail.services === props.services;
    });
  }

  return (
    <div className="results-item results-list">
      <h2>Hiking Trails in {props.region}</h2>
      <ul>
      {list
        .filter(function(item, i, ar) {
          return ar.indexOf(item) === i;
        })
        .map(trail => {
        return <Link to={{
          pathname: './results/trail-detail',
          search: '?name=' + trail.name,
          state: trail
        }} key={trail.name}><li><ResultsItem data={trail} /></li></Link>
      })}
      </ul>
    </div>
  );
}

export default ResultsList;
