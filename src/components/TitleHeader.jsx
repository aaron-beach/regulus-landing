import React from "react";
import { StaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";
import Image from "components/Image";
import PropTypes from "prop-types";


import "./TitleHeader.scss";

const TitleHeader = () => (
    <StaticQuery
      query={graphql`
        {
          file(relativePath: {}, name: {eq: "regulus"}) {
            childImageSharp {
              sizes(maxWidth: 1920) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      `}
      render={data =>      
        <>    
          <Image 
            className="image" 
            fileName={data}  
          /> 
          <pre>{JSON.stringify(data, null, 4)}</pre>
        </>
      }
    ></StaticQuery>
  )

  
  


  // render={(data) => {
  //   const image = data.images.edges.find((n) => n.node.relativePath.includes(name));

  //   if (!image) {
  //     return null;
  //   }

  //   const imageSizes = image.node.childImageSharp.sizes;
  //   return <Img alt={name} sizes={imageSizes} {...restProps} />;
  // }}

// ); 

TitleHeader.propTypes = {
  data: PropTypes.string.isRequired
}

export default TitleHeader;

