import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import Image from "components/Image";
import { Col } from "react-bootstrap";
import "./SectionHeader.scss";

const SectionHeader = ({ header, subheader, className, imageFileName, ...restProps }) => {
  const subheaderPart = subheader ? (
    <>
    <Image className="image" fileName={imageFileName}/>
    <h3 className="section-subheading text-uppercase">{subheader}</h3>
    </>
  ) : null;

  return (
    <Col lg={12} className={clsx("section-header", className)} {...restProps}>
      {subheaderPart}
      <h2 className="section-heading text-uppercase">{header}</h2>
    </Col>
  );
};

SectionHeader.propTypes = {
  header: PropTypes.string,
  imageFileName: PropTypes.string,
  subheader: PropTypes.string,
  className: PropTypes.string,
};

SectionHeader.defaultProps = {
  header: "",
  imageFileName: null,
  subheader: "",
  className: null,
};

export default SectionHeader;
