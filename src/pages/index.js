import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people!</h1>
    <p>Welcome to my site</p>
    <p>
      I am a software developer currently working and living in Bangalore,
      India.
    </p>

    <Link to="/blog/">Go to All Posts</Link>
  </Layout>
)
export default IndexPage
