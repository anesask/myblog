import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <br/>
    <br/>
    <code>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed ut mauris in purus hendrerit vestibulum et vel dolor.
    Nullam congue tellus nec urna aliquet feugiat.
    Mauris vestibulum sapien in dui varius, in iaculis magna semper.
    Vestibulum pretium ipsum vitae varius interdum.
    Aliquam et ipsum viverra lacus pulvinar vehicula.
    Suspendisse ullamcorper arcu at metus malesuada cursus.
    Cras sollicitudin nibh non est vestibulum placerat.
    Sed sed mauris suscipit, feugiat turpis ut, dignissim eros.
    Praesent non nisi facilisis mi pulvinar gravida.
    Nam molestie metus a mollis suscipit.
    <br/>
    <br/>
    <hr/>
    Aenean sed neque sit amet dolor sollicitudin convallis sed quis lorem.
    Fusce tristique neque vitae massa suscipit, sed lacinia ante accumsan.
    Curabitur id urna ut mauris pellentesque congue eu vitae odio.
    Pellentesque eleifend orci at tortor volutpat, at dignissim ipsum aliquam.
    Morbi feugiat justo non ligula ultrices bibendum.
    Morbi vitae nisl sit amet ipsum fermentum auctor.
    Morbi blandit nibh quis libero sagittis posuere.
    </code>
  </Layout>
)

export default SecondPage
