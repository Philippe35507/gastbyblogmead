import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>---Contact Page---</h1>
            <p>Facebook</p>
            <p>My Tweeter <a href="https://twitter.com/">here</a></p>
        </Layout>
    )
}

export default ContactPage