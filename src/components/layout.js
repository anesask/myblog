import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Menu from '../components/menu'
import '../theme/main.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Anes Mulalic - Frontend Developer based in Germany' },
            { name: 'keywords', content: 'Web Developer, Blog, React, JavaScript' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <Menu />
        {/* <div className="page-wrapper"> */}
            <div style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 20px 1.45rem',
            paddingTop: '4rem',
          }}
        >          
              {children}
            </div>
        {/* </div> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
