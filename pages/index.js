import Page from '../layouts/main'

import Hero from '../components/home/hero'
import Section from '../components/section'
import SearchCommune from '../components/search-commune'
import Subscribe from '../components/home/subscribe'

export default () => (
  <Page>
    <Hero title='Quelle est la qualité de l’air de votre commune ?' tagline='Découvrez le dès maintenant' />
    <Section title='Rechercher votre commune'>
      <SearchCommune />
    </Section>
    <Subscribe />
  </Page>
)
