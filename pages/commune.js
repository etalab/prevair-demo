import Page from '../layouts/main'

import Section from '../components/section'
import Commune from '../components/commune'

const title = 'Cherchez votre commune'
const description = 'Découvrez la qualité de l’air de votre commune'

export default () => (
  <Page title={title} description={description}>
    <Section>
      <Commune />
    </Section>
  </Page>
)
