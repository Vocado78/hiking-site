import React from 'react';
import { Link } from 'react-router-dom';

const SelectProvince = props => {
    return (
    <div className="form-row">
      <label className="title-label">Province</label>
      <select
        value={props.selectedOption}
        onChange={props.handleFunc}>
        <option value="">{props.placeholder}</option>
        {props.options.map(province => {
        return <option key={province} value={province}>
        {province}</option>
        })}
      </select>
    </div>
  );
}

const CheckOrRadioFilter = props => {
  return (
    <div className="form-row">
      <label className="title-label">{props.title}</label>
      {props.options.map(option => {
        return (
          <label key={option} className="input-label">
            <input
              name={props.setName}
              onChange={props.handleFunc}
              value={option}
              checked={props.selectedOption.indexOf(option) > -1}
              type={props.type} /> {option}
           </label>
        );
      })}
    </div>
  );
}


const FilterForm = props => {
    return (
      <form className="results-item filter-form">
        <p>Filter your results</p>
        <p style={{fontStyle: "italic"}}>Selected region: {props.region}</p>
        <SelectProvince
          placeholder={"Please select"}
          handleFunc={props.onProvinceSelect}
          options={props.provinces}
          selectedOption={props.selectedProvince} />
        <CheckOrRadioFilter
          title={"Number of days I want to hike"}
          setName={"days"}
          type={"radio"}
          handleFunc={props.onDaySelect}
          options={props.dayOptions}
          selectedOption={props.selectedDay} />
        <CheckOrRadioFilter
          title={"Level of Difficulty"}
          setName={"level"}
          type={"checkbox"}
          handleFunc={props.onLevelSelect}
          options={props.levelOptions}
          selectedOption={props.selectedLevel} />
        <CheckOrRadioFilter
          title={"Comfort"}
          setName={"comfort"}
          type={"radio"}
          handleFunc={props.onComSelect}
          options={props.comOptions}
          selectedOption={props.selectedCom} />
        <CheckOrRadioFilter
          title={"Services availability"}
          setName={"services"}
          type={"radio"}
          handleFunc={props.onServSelect}
          options={props.servOptions}
          selectedOption={props.selectedServ} />
        <Link className="clear-btn"
            to={{
              pathname: "/results",
              search: "?region=" + "all"
            }}>Clear all filters</Link>
      </form>
    );
  }

export default FilterForm;


/*
<button className="clear-btn"
     onClick={props.onClearFilter}>Clear all filters</button>
*/
