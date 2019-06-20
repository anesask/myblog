import React from 'react'
import { Link } from 'gatsby'

const Links = () => {
    return (
      <section className="link__section">
        <ul className="links">
          <li>
            <Link
              to="/"
              className="link-item"
              activeClassName="link-item--selected"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="link-item"
              activeClassName="link-item--selected"
            >
              about
            </Link>
          </li>
          {/* <li>
            <Link
              to="/work"
              className="link-item"
              activeClassName="link-item--selected"
            >
              projects
            </Link>
          </li> */}
          <li>
            <Link
              to="/posts"
              className="link-item"
              activeClassName="link-item--selected"
            >
              blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="link-item"
              activeClassName="link-item--selected"
            >
              contact
            </Link>
          </li>
        </ul>
      </section>
    )
  }
  
  export default Links