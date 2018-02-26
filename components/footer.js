import PropTypes from 'prop-types'

import theme from '../styles/theme'

const Footer = ({date}) => (
  <footer className='footer'>
    <div className='container'>
      Données fournies par l’INERIS - Date de mise à jour : {date}
    </div>
    <style jsx>{`
      .footer {
        background: ${theme.colors.almostBlack};
        color: ${theme.colors.white};
        padding: 2em 0;
        line-height: 2em;
      }

      .footer .container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 2em;
        flex-wrap: wrap;
      }
    `}</style>
  </footer>
)

Footer.propTypes = {
  date: PropTypes.string.isRequired
}

export default Footer
