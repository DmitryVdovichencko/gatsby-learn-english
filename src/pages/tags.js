import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

import Tag from "../components/Tag"


const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (

    <div>
      <h1>Tags</h1>
      <ul>

        {group.map(tag => (
                 <Tag
            tagName = {tag.fieldValue}
            tagCount = {tag.totalCount}
          >
          </Tag>
          )

        

     

        

        )}
      </ul>
    </div>

)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`