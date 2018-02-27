import {Fragment} from 'react'
import prune from 'underscore.string/prune'
import PropTypes from 'prop-types'
import Head from 'next/head'

const SITE_NAME = 'Prévisions Qualité de l’air'

const Meta = ({title, description}) => {
  description = prune(description, 160, '…')
  return (
    <Fragment>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        {title ? <title>{title} | {SITE_NAME}</title> : <title>{SITE_NAME}</title>}

        <link rel='icon' href='/static/favicon.ico' />
        <meta name='description' content={description} />
        <meta name='image' content='/static/images/previews/default.png' />
      </Head>
    </Fragment>
  )
}

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

Meta.defaultProps = {
  title: 'API de consultation des mesures de qualité de l’air en France',
  description: 'Découvrez les prévisions de la qualité de l’air dans votre région'
}

export default Meta
