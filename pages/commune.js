import FaSearch from 'react-icons/lib/fa/search'

import Page from '../layouts/main'
import Head from '../components/main/head'

import Section from '../components/section'
import Commune from '../components/commune'

const title = 'Cherchez votre commune'
const description = 'Découvrez la qualité de l’air de votre commune'

export default () => (
  <Page title={title} description={description}>
    <Head title={title} icon={<FaSearch />}>
      {description}
    </Head>
    <Section>
      <Commune />
    </Section>
  </Page>
)
