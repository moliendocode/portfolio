import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <SEO title="Blog" description="Moliendo Blogs" />
      <section className="blog-page">
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "MMMM Do - YYYY")
        desc
        slug
        title
        id
      }
    }
  }
`

export default Blog
