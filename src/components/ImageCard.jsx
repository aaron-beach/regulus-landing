import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container, Card } from "react-bootstrap";
import Image from "components/Image";
import TitleHeader from "components/TitleHeader";
import "./ImageCard.scss";

const ImageCard = ({ className, imageFileName, imageAlt, header, subheader, extraInfo }) => {
  return (
    <Card className={clsx("image-card bg-dark text-white text-center", className)}>
      <Image className="image" fileName={imageFileName} alt={imageAlt || header || subheader} />
      <Card.ImgOverlay className="no-padding">
        <Container>
          <div className="intro-text">
            <div className="text-vision">
              <h2>OUR VISION:</h2> 
              {/* <h3>{statement[0].vision}</h3> */}
            </div>
            <div className="text-mission">
                <h2>OUR MISSION:</h2>
                {/* <h3>{statement[1].mission}</h3> */}
            </div>
            <TitleHeader className="logo"/>
            <div className="cta">{extraInfo}</div>
          </div>
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
};

ImageCard.propTypes = {
  className: PropTypes.string,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  statement: PropTypes.string,
  extraInfo: PropTypes.any,
};

ImageCard.defaultProps = {
  className: null,
  imageFileName: null,
  imageAlt: null,
  statement: null,
  header: "",
  subheader: "",
  extraInfo: null,
};

export default ImageCard;
