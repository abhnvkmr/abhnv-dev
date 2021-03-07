import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            instagram
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: `0.5rem`,
        paddingTop: `1rem`,
      }}
    >
      <p>
        Written by <strong>{author}</strong> who lives and works in Bangalore building things at a
        startup when he's not travelling. You should follow him on{" "}
        <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>,{" "}
        <a href={`https://www.instagram.com/${social.instagram}`}>Instagram</a>.
      </p>
    </div>
  )
}

export default Bio
