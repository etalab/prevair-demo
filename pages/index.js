import Page from '../layouts/main'

import Hero from '../components/home/hero'
import Section from '../components/section'
import SearchCommune from '../components/search-commune'

export default () => (
  <Page>
    <Hero title='Comment respirera-t-on dans votre commune dans les prochains jours ?' tagline='Découvrez le dès maintenant' />
    <Section title='Choix de la commune'>
      <SearchCommune />
    </Section>
  </Page>
)
