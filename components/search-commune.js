import React from 'react'
import debounce from 'debounce'

import api from '../lib/api'

import Footer from '../components/footer'
import Section from './section'
import SearchInput from './search-input'
import Notification from './notification'
import renderCommune from './search-input/render-commune'
import Commune from './commune'
import AirQuality from './air-quality'

class SearchCommune extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      results: [],
      commune: null,
      air: null,
      loading: false,
      error: null
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSelect = this.handleSelect.bind(this)

    this.handleSearch = debounce(this.handleSearch, 200)
  }

  componentDidMount() {
    this.update()
  }

  update() {
    this.setState({results: [], loading: true})
    const fields = 'fields=code,nom,centre,departement'

    this.setState(state => {
      state.query = `communes?nom=${state.input}&${fields}&boost=population`
      this.handleSearch(state.query)
    })
  }

  handleSelect(item) {
    this.setState({input: item.nom, commune: item}, this.getAirQuality)
    this.update()
  }

  handleInput(input) {
    this.setState({input})
    this.update()
  }

  async handleSearch() {
    const {query} = this.state
    try {
      const results = await api('https://geo.api.gouv.fr/', query)
      this.setState({
        results: results.splice(0, 5) || []
      })
    } catch (err) {
      this.setState({
        results: [],
        error: err
      })
    }
    this.setState({loading: false})
  }

  async getAirQuality() {
    const {commune} = this.state
    const {coordinates} = commune.centre
    const query = `lon=${coordinates[0]}&lat=${coordinates[1]}`

    try {
      const results = await api('https://sandbox.geo.api.gouv.fr/prevair?', query)
      this.setState({
        air: results
      })
    } catch (err) {
      this.setState({
        results: [],
        error: err
      })
    }
  }

  render() {
    const {input, results, commune, air, loading, error} = this.state

    return (
      <Section>
        <SearchInput
          value={input}
          results={results}
          loading={loading}
          placeholder='Rechercher une commune…'
          handleSelect={this.handleSelect}
          search={this.handleInput}
          renderItem={renderCommune} />

        {error &&
          <div className='error'>
            <Notification message={error.message} type='error' />
          </div>
          }

        {commune && <Commune {...commune} />}

        {air && <AirQuality {...air} />}

        {air && <Footer date={air.date} />}

        <style jsx>{`
          .error {
            margin: 1em 0;
          }
          `}</style>
      </Section>
    )
  }
}

export default SearchCommune
