import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"


import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
          <Head title="home" />
          <h1>Hello !!</h1>
          <h2>I am Philippe</h2>
          <p>Need help ? <Link to="/contact">CONTACT ME</Link></p>
    </Layout>
    )
  }

export default IndexPage


  /* AVANT CREATION DE LAYOUT
  return (
    <div>
      <Header />
        <h1>Hello !!</h1>
        <h2>I am Philippe</h2>
        <p>Need help ? <Link to="/contact">CONTACT ME</Link></p>
      <Footer />
    </div>
  )
}
*/

