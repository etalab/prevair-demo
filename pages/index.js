import Page from '../layouts/main'

import Hero from '../components/hero'
import Section from '../components/section'
import SearchCommune from '../components/search-commune'

export default () => (
  <Page>
    <Hero title='Quel est la qualité de l’air de votre commune ?' tagline='Découvrez le dès maintenant' />
    <Section title='Rechercher votre commune'>
      <SearchCommune />
    </Section>
  </Page>
)
