import PropTypes from 'prop-types'
import MdCallMade from 'react-icons/lib/md/call-made'
import MdCallReceived from 'react-icons/lib/md/call-received'

import theme from '../../styles/theme'

const composants = ['NO2', 'O3', 'PM10', 'PM25']

const limits = [
  {PM10: 50},
  {PM25: 25},
  {'03': 100},
  {NO2: 20}
]

const AirQuality = ({...props}) => {
  return (
    <div className='tables'>

      {['Aujourd’hui', 'Demain', 'Après demain'].map((day, idx) => (
        <div key={day}>
          <h2>{day}</h2>
          <table>
            <tbody>
              <tr>
                <th />
                <th>Moyenne</th>
                <th>Maximum</th>
                {idx > 0 && <th>Évolution</th>}
              </tr>
            </tbody>
            <tbody>
              {composants.map(composant => (
                <tr key={`${day}-${composant}`}>
                  <td className='composant'>
                    {composant}
                  </td>
                  <td className={props[`${composant}-MOYJ${idx}`] < limits[composant] ? 'red' : 'green'}>
                    {props[`${composant}-MOYJ${idx}`]}
                  </td>
                  <td>
                    {props[`${composant}-MAXJ${idx}`]}
                  </td>
                  {idx > 0 &&
                    props[`${composant}-MAXJ${idx}`] > props[`${composant}-MAXJ${idx - 1}`] ?
                      <td className='arrow red'><MdCallMade /></td> :
                      <td className='arrow green'><MdCallReceived /></td>
                  }
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <style jsx>{`
        .tables {
          display: flex;
          flex-flow: wrap;
          justify-content: space-between;
          margin-top: 1em;
          padding: 1em;
          border: 1px solid ${theme.border};
        }

        h2 {
          text-align: center;
        }

        th, td {
          padding: 1em;
          text-align: center;
        }

        td.composant {
          background: ${theme.primary};
          color: ${theme.colors.white};
        }

        td.green {
          background: ${theme.successBg};
          -moz-transform: scaleX(-1);
          -o-transform: scaleX(-1);
          -webkit-transform: scaleX(-1);
          transform: scaleX(-1);
        }

        td.red {
          background: ${theme.errorBg};
        }
        `}</style>
    </div>
  )
}

AirQuality.propTypes = {
  date: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
  'NO2-MAXJ0': PropTypes.number.isRequired,
  'NO2-MAXJ1': PropTypes.number.isRequired,
  'NO2-MAXJ2': PropTypes.number.isRequired,
  'NO2-MAXJ3': PropTypes.number.isRequired,
  'NO2-MOYJ0': PropTypes.number.isRequired,
  'NO2-MOYJ1': PropTypes.number.isRequired,
  'NO2-MOYJ2': PropTypes.number.isRequired,
  'NO2-MOYJ3': PropTypes.number.isRequired,
  'O3-MAXJ0': PropTypes.number.isRequired,
  'O3-MAXJ1': PropTypes.number.isRequired,
  'O3-MAXJ2': PropTypes.number.isRequired,
  'O3-MAXJ3': PropTypes.number.isRequired,
  'O3-MOYJ0': PropTypes.number.isRequired,
  'O3-MOYJ1': PropTypes.number.isRequired,
  'O3-MOYJ2': PropTypes.number.isRequired,
  'O3-MOYJ3': PropTypes.number.isRequired,
  'PM10-MAXJ0': PropTypes.number.isRequired,
  'PM10-MAXJ1': PropTypes.number.isRequired,
  'PM10-MAXJ2': PropTypes.number.isRequired,
  'PM10-MAXJ3': PropTypes.number.isRequired,
  'PM10-MOYJ0': PropTypes.number.isRequired,
  'PM10-MOYJ1': PropTypes.number.isRequired,
  'PM10-MOYJ2': PropTypes.number.isRequired,
  'PM10-MOYJ3': PropTypes.number.isRequired,
  'PM25-MAXJ0': PropTypes.number.isRequired,
  'PM25-MAXJ1': PropTypes.number.isRequired,
  'PM25-MAXJ2': PropTypes.number.isRequired,
  'PM25-MAXJ3': PropTypes.number.isRequired,
  'PM25-MOYJ0': PropTypes.number.isRequired,
  'PM25-MOYJ1': PropTypes.number.isRequired,
  'PM25-MOYJ2': PropTypes.number.isRequired,
  'PM25-MOYJ3': PropTypes.number.isRequired
}

export default AirQuality
