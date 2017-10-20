import React from 'react';
import queryString from 'query-string';

import helpers from '../utils/helpers';
import { filterByRegion } from '../utils/helpers';
import { capitalize } from '../utils/helpers';
import { showAllTrails } from '../utils/helpers';
import { showProvinces } from '../utils/helpers';
import { showAllProvinces } from '../utils/helpers';
import FilterForm from './filter-form';
import ResultsList from './results-list';


export default class TrailResults extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      results: [],
      name: "",
      provinces: [],
      selectedProvince: "",
      services: [],
      selectedServ: "",
      duration: [],
      selectedDay: "",
      level: [],
      selectedLevel: [],
      comfort: [],
      selectedCom: ""
    };
    this.handleProvinceSelect = this.handleProvinceSelect.bind(this);
    this.handleServSelect = this.handleServSelect.bind(this);
    this.handleDaySelect = this.handleDaySelect.bind(this);
    this.handleLevelSelect = this.handleLevelSelect.bind(this);
    this.handleComSelect = this.handleComSelect.bind(this);
    //this.handleClearFilter = this.handleClearFilter.bind(this);
  }
  componentDidMount() {
    const region = queryString.parse(this.props.location.search).region || "all";

    if (region === "all") {
      var list = showAllTrails();
      var display = showAllProvinces();
    }  else {
      var list = filterByRegion(region);
      var display = showProvinces(region);
    }
    this.setState({
      results: list,
      name: region,
      provinces: display,
      services: ["Satisfactory", "Good", "Very good"],
      duration: ["1-3 days", "4-7 days", "2 weeks", "3 weeks or more"],
      level: ["Easy", "Easy to moderate", "Moderate", "Moderate to difficult",
       "Difficult"],
      comfort: ["Mainly camping/camping cabins", "Mainly hostels/hotels"],
      selectedProvince: "",
      selectedDay: "",
      selectedLevel: [],
      selectedCom: "",
      selectedServ: ""
    });
  }
  componentWillReceiveProps(nextProps) {
    const region = queryString.parse(nextProps.location.search).region || "all";

    if (region === "all") {
      var list = showAllTrails();
      var display = showAllProvinces();
    }  else {
      var list = filterByRegion(region);
      var display = showProvinces(region);
    }
    this.setState({
      results: list,
      name: region,
      provinces: display,
      services: ["Satisfactory", "Good", "Very good"],
      duration: ["1-3 days", "4-7 days", "2 weeks", "3 weeks or more"],
      level: ["Easy", "Easy to moderate", "Moderate", "Moderate to difficult",
       "Difficult"],
      comfort: ["Mainly camping/camping cabins", "Mainly hostels/hotels"],
      selectedProvince: "",
      selectedDay: "",
      selectedLevel: [],
      selectedCom: "",
      selectedServ: ""
    });
  }

  handleProvinceSelect(event) {
    this.setState({
      selectedProvince: event.target.value
      });
  }

  handleDaySelect(event) {
    this.setState({ selectedDay: event.target.value });
  }

  handleLevelSelect(event) {
    const newLevel = event.target.value;
    let newSelArr;
    if (this.state.selectedLevel.includes(newLevel)) {
      newSelArr = this.state.selectedLevel.filter(level => {
        level !== newLevel;
      });
    } else {
      newSelArr = [...this.state.selectedLevel, newLevel];
    }
    this.setState({ selectedLevel: newSelArr });
  }

  handleComSelect(event) {
      this.setState({ selectedCom: event.target.value });
  }

  handleServSelect(event) {
    this.setState({ selectedServ: event.target.value });
  }

  /*handleClearFilter(event) {
    event.preventDefault();
    this.setState({
      selectedProvince: "",
      selectedDay: "",
      selectedLevel: [],
      selectedCom: "",
      selectedServ: ""
    });
  }*/

  render() {
    const region = capitalize(this.state.name);

    return (
      <div className="results-container">
        <FilterForm region={region} provinces={this.state.provinces}
        onProvinceSelect={this.handleProvinceSelect}
        selectedProvince={this.state.selectedProvince}
        servOptions={this.state.services}
        selectedServ={this.state.selectedServ}
        onServSelect={this.handleServSelect}
        dayOptions={this.state.duration}
        selectedDay={this.state.selectedDay}
        onDaySelect={this.handleDaySelect}
        levelOptions={this.state.level}
        selectedLevel={this.state.selectedLevel}
        onLevelSelect={this.handleLevelSelect}
        comOptions={this.state.comfort}
        selectedCom={this.state.selectedCom}
        onComSelect={this.handleComSelect} />
        <ResultsList region={region} list={this.state.results}
        prov={this.state.selectedProvince}
        day={this.state.selectedDay}
        level={this.state.selectedLevel}
        comfort={this.state.selectedCom}
        services={this.state.selectedServ} />
      </div>
    );
  }
}
// onClearFilter={this.handleClearFilter}
