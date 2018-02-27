import FaTerminal from 'react-icons/lib/fa/terminal'
import Page from '../layouts/main'

import Head from '../components/main/head'
import Api from '../components/api'

const title = 'API'
const description = 'Récupérer les données du modèle de prévisions directement dans votre application'

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<FaTerminal />}>
      {description}
    </Head>
    <Api />
  </Page>
)
