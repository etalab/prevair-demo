import Link from 'next/link'

import FaTwitter from 'react-icons/lib/fa/twitter'
import FaGithub from 'react-icons/lib/fa/github'
import FaMedium from 'react-icons/lib/fa/medium'
import FaEnvelope from 'react-icons/lib/fa/envelope'

import theme from '../../styles/theme'

const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <div className='footer__logo'>
        <img className='nav__logo' src='/static/images/logos/etalab.svg' alt='Logo Etalab' />
        <ul className='footer__social'>
          <li><Link href='https://twitter.com/geodatagouv'><a><FaTwitter /></a></Link></li>
          <li><Link href='https://github.com/etalab/prevair-demo'><a><FaGithub /></a></Link></li>
          <li><Link href='https://blog.geo.data.gouv.fr'><a><FaMedium /></a></Link></li>
          <li><a href='mailto:contact@geo.data.gouv.fr'><FaEnvelope /></a></li>
        </ul>
      </div>
      <ul className='footer__links'>
        <li><h2>prevair-demo</h2></li>
        <li><a href='mailto:contact@geo.data.gouv.fr'>Contact</a></li>
      </ul>
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

      .footer__logo img {
        width: 160px;
      }

      .footer ul {
        list-style-type: none;
        padding: 0;
      }

      .footer__social {
        margin-top: 1em;
      }

      .footer__social li {
        display: inline;
        margin-right: 1em;
      }

      .footer__social a {
        color: ${theme.colors.white};
        font-size: 25px;
      }

      .footer__links {
        margin: 0;
      }

      .footer__links a {
        color: ${theme.colors.white};
        text-decoration: none;
      }

      .footer__links h2 {
        margin-top: 0;
        margin-bottom: 0.5em;
      }
      `}</style>
  </footer>
)

export default Footer
