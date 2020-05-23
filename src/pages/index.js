import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./pages.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1># Hi people!</h1>
    <h2>## Welcome to my site!</h2>
    <p>I am a software developer currently working and living in Bangalore, India.</p>

    <h3>### Skills</h3>

    <ul id="skills-list">
      <li>Languages : Python, JavaScript, TypeScript, Rust, Go</li>
      <li>Frameworks: Django, Flask, React, AngularJS, VueJS</li>
      <li>Platforms : Docker</li>
    </ul>

    <h3>
      ### <Link to="/blog/">Blog ➡</Link>
    </h3>
  </Layout>
)
export default IndexPage
