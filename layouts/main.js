import React from 'react'
import PropTypes from 'prop-types'

import MainStyle from '../components/main-style'
import Header from '../components/header'

class Layout extends React.Component {
  render() {
    const {children} = this.props

    return (
      <div>
        <MainStyle />
        <Header />
        <main>
          {children}
        </main>

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
  children: PropTypes.node
}

Layout.defaultProps = {
  children: null
}

export default Layout
