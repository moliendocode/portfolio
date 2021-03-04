import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="Error" description="404" />
      <main className="error-page">
        <div className="error-container">
          <h1>Esta página no existe</h1>
          <Link to="/" className="btn">
            Volver al Inicio
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
