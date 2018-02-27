/* eslint react/no-unescaped-entities: off */
import theme from '../../styles/theme'

import Section from '../section'

const Api = () => (
  <Section>
    <div className='entrypoint' id='search'>
      <div className='row'>
        <div className='description'>
          <h2>/prevair/</h2>
          <p>Point d’entrée.</p>
        </div>
        <div className='details'>
          <p>Utiliser les paramètres <b>lon</b> et <b>lat</b> pour faire une recherche géographique:</p>
          <pre><code>http 'https://nivo.api.gouv.fr/prevair?lon=1.075679&lat=48.765222'</code></pre>
          <pre><code>{`
            {
            "date": "2018-02-26",
            "lat": 48.758,
            "lon": 1.078,
            "NO2-MAXJ0": 49.48,
            "NO2-MAXJ1": 50.11,
            "NO2-MAXJ2": 58.67,
            "NO2-MAXJ3": 49.07,
            "NO2-MOYJ0": 20.83,
            "NO2-MOYJ1": 20.37,
            "NO2-MOYJ2": 25.37,
            "NO2-MOYJ3": 23.72,
            "O3-MAXJ0": 74.72,
            "O3-MAXJ1": 67.86,
            "O3-MAXJ2": 74.4,
            "O3-MAXJ3": 68.42,
            "O3-MOYJ0": 60.2,
            "O3-MOYJ1": 53.44,
            "O3-MOYJ2": 52.87,
            "O3-MOYJ3": 49.71,
            "PM10-MAXJ0": 31.7,
            "PM10-MAXJ1": 32.43,
            "PM10-MAXJ2": 34.91,
            "PM10-MAXJ3": 38.21,
            "PM10-MOYJ0": 21.72,
            "PM10-MOYJ1": 22.44,
            "PM10-MOYJ2": 25.43,
            "PM10-MOYJ3": 23.41,
            "PM25-MAXJ0": 28.19,
            "PM25-MAXJ1": 27.65,
            "PM25-MAXJ2": 30.06,
            "PM25-MAXJ3": 31.35,
            "PM25-MOYJ0": 17.54,
            "PM25-MOYJ1": 18.4,
            "PM25-MOYJ2": 20.57,
            "PM25-MOYJ3": 19.24
            }
          `}</code></pre>
          <p>Les attributs retournés sont&nbsp;:</p>
          <ul>
            <li><em>date</em>&nbsp;: Date de mise à jour de la donnée</li>
            <li><em>lat</em>&nbsp;: Latitude</li>
            <li><em>lon</em>&nbsp;: Longitude</li>
            <li><em>NO2-MAXJ0</em>&nbsp;: Quantité maximum de dioxyde d’azote dans l’air à J+0, exprimé en µg/m3</li>
            <li><em>NO2-MAXJ1</em>&nbsp;: Quantité maximum de dioxyde d’azote dans l’air à J+1, exprimé en µg/m3</li>
            <li><em>NO2-MAXJ2</em>&nbsp;: Quantité maximum de dioxyde d’azote dans l’air à J+2, exprimé en µg/m3</li>
            <li><em>NO2-MAXJ3</em>&nbsp;: Quantité maximum de dioxyde d’azote dans l’air à J+3, exprimé en µg/m3</li>
            <li><em>NO2-MOYJ0</em>&nbsp;: Quantité moyenne de dioxyde d’azote dans l’air à J+0, exprimé en µg/m3</li>
            <li><em>NO2-MOYJ1</em>&nbsp;: Quantité moyenne de dioxyde d’azote dans l’air à J+1, exprimé en µg/m3</li>
            <li><em>NO2-MOYJ2</em>&nbsp;: Quantité moyenne de dioxyde d’azote dans l’air à J+2, exprimé en µg/m3</li>
            <li><em>NO2-MOYJ3</em>&nbsp;: Quantité moyenne de dioxyde d’azote dans l’air à J+3, exprimé en µg/m3</li>
            <li><em>O3-MAXJ0</em>&nbsp;: Quantité maximum d’ozone dans l’air à J+0, exprimé en µg/m3</li>
            <li><em>O3-MAXJ1</em>&nbsp;: Quantité maximum d’ozone dans l’air à J+1, exprimé en µg/m3</li>
            <li><em>O3-MAXJ2</em>&nbsp;: Quantité maximum d’ozone dans l’air à J+2, exprimé en µg/m3</li>
            <li><em>O3-MAXJ3</em>&nbsp;: Quantité maximum d’ozone dans l’air à J+3, exprimé en µg/m3</li>
            <li><em>O3-MOYJ0</em>&nbsp;: Quantité moyenne d’ozone dans l’air à J+0, exprimé en µg/m3</li>
            <li><em>O3-MOYJ1</em>&nbsp;: Quantité moyenne d’ozone dans l’air à J+1, exprimé en µg/m3</li>
            <li><em>O3-MOYJ2</em>&nbsp;: Quantité moyenne d’ozone dans l’air à J+2, exprimé en µg/m3</li>
            <li><em>O3-MOYJ3</em>&nbsp;: Quantité moyenne d’ozone dans l’air à J+3, exprimé en µg/m3</li>
            <li><em>PM10-MAXJ0</em>&nbsp;: Quantité maximum de particules de diamètre inférieur à 10 µm dans l’air à J+0, exprimé en µg/m3</li>
            <li><em>PM10-MAXJ1</em>&nbsp;: Quantité maximum de particules de diamètre inférieur à 10 µm dans l’air à J+1, exprimé en µg/m3</li>
            <li><em>PM10-MAXJ2</em>&nbsp;: Quantité maximum de particules de diamètre inférieur à 10 µm dans l’air à J+2, exprimé en µg/m3</li>
            <li><em>PM10-MAXJ3</em>&nbsp;: Quantité maximum de particules de diamètre inférieur à 10 µm dans l’air à J+3, exprimé en µg/m3</li>
            <li><em>PM10-MOYJ0</em>&nbsp;: Quantité moyenne de particules de diamètre inférieur à 10 µm dans l’air à J+0, exprimé en µg/m3</li>
            <li><em>PM10-MOYJ1</em>&nbsp;: Quantité moyenne de particules de diamètre inférieur à 10 µm dans l’air à J+1, exprimé en µg/m3</li>
            <li><em>PM10-MOYJ2</em>&nbsp;: Quantité moyenne de particules de diamètre inférieur à 10 µm dans l’air à J+2, exprimé en µg/m3</li>
            <li><em>PM10-MOYJ3</em>&nbsp;: Quantité moyenne de particules de diamètre inférieur à 10 µm dans l’air à J+3, exprimé en µg/m3</li>
            <li><em>PM25-MAXJ0</em>&nbsp;: Quantité maximum de particules de diamètre inférieur à 2,5 µm dans l’air à J+0, exprimé en µg/m3</li>
            <li><em>PM25-MAXJ1</em>&nbsp;: Quantité maximum de particules de diamètre inférieur à 2,5 µm dans l’air à J+1, exprimé en µg/m3</li>
            <li><em>PM25-MAXJ2</em>&nbsp;: Quantité maximum de particules de diamètre inférieur à 2,5 µm dans l’air à J+2, exprimé en µg/m3</li>
            <li><em>PM25-MAXJ3</em>&nbsp;: Quantité maximum de particules de diamètre inférieur à 2,5 µm dans l’air à J+3, exprimé en µg/m3</li>
            <li><em>PM25-MOYJ0</em>&nbsp;: Quantité moyenne de particules de diamètre inférieur à 2,5 µm dans l’air à J+0, exprimé en µg/m3</li>
            <li><em>PM25-MOYJ1</em>&nbsp;: Quantité moyenne de particules de diamètre inférieur à 2,5 µm dans l’air à J+1, exprimé en µg/m3</li>
            <li><em>PM25-MOYJ2</em>&nbsp;: Quantité moyenne de particules de diamètre inférieur à 2,5 µm dans l’air à J+2, exprimé en µg/m3</li>
            <li><em>PM25-MOYJ3</em>&nbsp;: Quantité moyenne de particules de diamètre inférieur à 2,5 µm dans l’air à J+3, exprimé en µg/m3</li>
          </ul>
        </div>
      </div>
    </div>

    <style jsx>{`
      .entrypoint + .entrypoint {
        border-top: 1px solid ${theme.borderLighter};
      }

      .row {
        display: flex;
        flex-flow: wrap;
        justify-content: space-between;
        padding: 40px 0;
      }

      .details {
        background-color: ${theme.colors.darkGrey};
        color: ${theme.colors.white};
        padding: 40px;
        border: 1px solid ${theme.borderLighter};
        border-radius: ${theme.borderRadius};
        box-shadow: 0 1px 4px 0 ${theme.boxShadow};
        width: 100%;
      }

      .details code {
        color: ${theme.darkText};
      }

      .prose {
        font-size: 1.1em;
      }

      .prose ul {
        list-style: circle;
      }

      @media (min-width: 900px) {
        .row {
          flex-flow: row;
        }

        .details {
          width: 70%;
        }

        .description {
          width: 25%;
        }
      }
      `}</style>
  </Section>
)

export default Api
