import React from "react";
import TitleImage from "components/Image";
import PropTypes from "prop-types";


import "./TitleHeader.scss";

const TitleHeader = () => (
  <div className="logo">    
    <TitleImage 
      className="logo-image" 
      fileName={"regulus"
        }
      alt={"regulus"}
    /> 
    <h1 className="logo-text">egulus <span>Consultants</span></h1>

  </div>
  )

TitleHeader.propTypes = {
  data: PropTypes.string.isRequired
}

export default TitleHeader;

