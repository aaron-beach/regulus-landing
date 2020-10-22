import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

import "./QuoteBubble.scss";


const QuoteBubble = ( { clientName }) => (
  <StaticQuery
    query={graphql`
      query ClientsQuery {
        clients: allMarkdownRemark {
          nodes {
            frontmatter {
              client {
                company
                content
                imageFileName
                name
                title
              }
            }
          }
        }
      }
    `}   
    render={data => {
      const clients = data.clients.nodes.find( (elem) => elem.frontmatter.client != null)

      const { company, name, title, content } = clients.frontmatter.client.find(n => n.company == ( clientName || "Bulbfire Ltd."))

      return <div className="speech">
         <p>
           {content}
         </p>
        <span>{name}, {title}, {company}</span>
      </div>
     }}
  />
)

QuoteBubble.propTypes = {
  clientName: PropTypes.string.isRequired
}

QuoteBubble.defaultProps = {
  clientName: null
}

export default QuoteBubble
