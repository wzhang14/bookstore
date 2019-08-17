import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="Welcome to BookStore"
        info="Sign up to our monthly newsletter and get a sneak peek at our new arrivals, signed and hard-to-find books!"
      >
        <Link to="/books" className="btn-white">
          explore books
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)
