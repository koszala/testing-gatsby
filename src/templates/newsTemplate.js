import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Header from "../components/header"

export default function ({ data }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html, timeToRead } = markdownRemark
    let featuredImgFluid = frontmatter.featured.childImageSharp.fluid


    console.log(data)

    return (
        <Layout>
            <div className="news-container">
                <div className="news">
                    <Header headerText={frontmatter.title}/>
                    <h2>{frontmatter.date}</h2>
                    <p>Time to read: {timeToRead} min</p>
                    <Img fluid={featuredImgFluid} />
                    
                    <div
                        className="news-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />

                </div>
            </div>
            <Link to="/blog">Return</Link>
        </Layout>
    )
}

export const pageQuery = graphql`
  query NewsItemQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "dd, DD MMMM, YYYY")
        slug
        title
        featured {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
    }
    allImageSharp {
      nodes {
        fluid {
          srcSet
        }
      }
    }
  }
`