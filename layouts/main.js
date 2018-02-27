import React from 'react'
import PropTypes from 'prop-types'

import Meta from '../components//main/meta'
import MainStyle from '../components/main-style'
import Header from '../components/main/header'
import Footer from '../components/main/footer'

class Layout extends React.Component {
  render() {
    const {title, description, children} = this.props

    return (
      <div>
        <Meta title={title} description={description} />
        <MainStyle />
        <Header />
        <main>
          {children}
        </main>
        <Footer />

        <style jsx>{`
          div {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background-color: #fff;
          }

          main {
            flex: 1;
          }
        `}</style>

        <script src='https://cdn.polyfill.io/v2/polyfill.min.js?features=Array.prototype.includes,modernizr:es6string,Promise,fetch' />
      </div>
    )
  }
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node
}

Layout.defaultProps = {
  title: null,
  description: null,
  children: null
}

export default Layout
