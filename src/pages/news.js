import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Layout from "../components/layout"
import Header from "../components/header"

const News = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const News = edges
        .filter(edge => !!edge.node.frontmatter.date)
        .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

    return (
        <Layout>
            <Header headerText="News" />
            <div>{News}</div>
        </Layout>
    )

}

export default News

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: {content_type: {eq: "news"}}}
      ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "dd, DD MMMM, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`