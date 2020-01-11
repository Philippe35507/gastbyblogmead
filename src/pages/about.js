import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
    return (
            <Layout>
                    <Head title="About" />
                    <h1>---About Me---</h1>
                    <p>Philippe</p>
                    <p>I live in Spain</p>
                    <p><Link to="/contact">contact me here</Link></p>
            </Layout>
        )
}

export default AboutPage