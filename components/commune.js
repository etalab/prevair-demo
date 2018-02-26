import React from 'react'
import PropTypes from 'prop-types'

import theme from '../styles/theme'

class Commune extends React.Component {
  render() {
    const {nom, departement} = this.props

    return (
      <div className='commune-container'>
        <div className='head'>
          <h2>{nom}</h2>
          <h4>{departement.nom} ({departement.code})</h4>
        </div>

        <style jsx>{`
          .commune-container {
          }

          .head {
            display: flex;
            justify-content: space-between;
            flex-flow: wrap;
            align-items: center;
            border-bottom: 2px solid ${theme.colors.black};
            margin: 2em 0;
          }

          `}</style>
      </div>
    )
  }
}

Commune.propTypes = {
  nom: PropTypes.string.isRequired,
  departement: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired
  }).isRequired
}

export default Commune
