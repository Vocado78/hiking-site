import React from 'react';

const Contact = () => {
  const header = "Contact me";
  const info = "Coming soon. In the meantime drop me a line at " +
  "hedeliningrid(a)gmail.com."

  return (
    <div style={{height:"705px"}} className="page-container">
      <h2 className="page-header">{header}</h2>
      <p style={{width: "600px", lineHeight: "1.3em"}}>{info}</p>
    </div>
  );
}

export default Contact;
