import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import { Link } from "gatsby"
import Banner from "../components/Banner"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner info="Sorry. The page you are looking for can not be found.">
          <Link to="/" className="btn-white">
            Back to home page
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
