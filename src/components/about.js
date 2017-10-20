import React from 'react';

const About = () => {
  const header = "About this website";
  const infoFirst =
  "This site is work in progress and is still in its infancy. The aim of the " +
  "site is to provide an overview of all major hiking trails in Sweden and " +
  "enough tools for getting started with planning a hiking trip. It is not " +
  "an attempt to replace existing trail websites and guides; but to " +
  "complement them. This site should be used as a first step for finding a " +
  "suitable trail, then users go on to more in-depth information " +
  "resources. It is made with visitors to Sweden in mind, but hopefully " +
  "Swedish nationals will find it useful too."
  const infoSecond =
  "Many more trails will be added to the list and information will be edited. " +
  "The maps will show more accurate routes of the trails (and not just a line " +
  "between start and finish), and a search function will be added to each " +
  "trail description to let users search for public transport routes and " +
  "timetables."

  return (
    <div style={{height:"705px"}} className="page-container">
      <h2 className="page-header">{header}</h2>
      <p style={{width: "600px", lineHeight: "1.3em"}}>{infoFirst}</p>
      <p style={{width: "600px",  marginTop:"1em", lineHeight: "1.3em"}}>{infoSecond}</p>
      <p style={{width:"600px", marginTop:"1.25em", fontSize:"0.8em",
        lineHeight: "1.3em"}}>
        The map of Sweden on the home page is originally a file by
        Lapplänning (Based on SWE-Map Kommuner2007.svg by Lokal_Profil)
        <a href='http://creativecommons.org/licenses/by-sa/2.5'> [CC BY-SA 2.5]
        </a> via Wikimedia Commons.
      </p>
    </div>
  );
}

export default About;
