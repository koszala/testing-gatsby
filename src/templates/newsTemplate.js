import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html, timeToRead } = markdownRemark
    return (
        <Layout>
            <div className="news-container">
                <div className="news">
                    <Header headerText={frontmatter.title}/>
                    <h2>{frontmatter.date}</h2>
                    <p>Time to read: {timeToRead} min</p>
                    <div style={{ display: 'flex' }}>
                        <p><img src={frontmatter.photo.publicURL} alt="" style={{ maxHeight: '200px', marginRight: '1rem' }}/></p>
                        <div
                            className="news-content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />

                    </div>
                </div>
            </div>
            <Link to="/blog">Return</Link>
        </Layout>
    )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "dd, DD MMMM, YYYY")
        slug
        title
        photo {
            publicURL
        }
      }
      timeToRead
    }
  }
`