import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Layout from "../components/layout"
import Header from "../components/header"

const BlogPosts = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date)
        .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

    return (
        <Layout>
            <Header headerText="Blog"/>
            <div>{Posts}</div>
        </Layout>
    )

}

export default BlogPosts

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: {content_type: {eq: "blog-post"}}}
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