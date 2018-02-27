import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'next/router'
import debounce from 'debounce'

import api from '../../lib/api'

import LoadingContent from '../loading-content'
import SearchCommune from '../search-commune'

import CommuneHeader from './commune-header'
import AirQuality from './air-quality'
import Footer from './footer'

class Commune extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commune: null,
      air: null,
      loading: false,
      error: null
    }

    this.onSelect = this.onSelect.bind(this)

    this.getCommune = debounce(this.getCommune, 200)
  }

  componentDidMount() {
    const {router} = this.props

    if (router.query.code) {
      this.update()
    }
  }

  componentDidUpdate() {
    const {router} = this.props
    const {code} = this.state

    if (code !== router.query.code) {
      this.update()
    }
  }

  update() {
    const {router} = this.props

    this.setState(state => {
      state.code = router.query.code
      state.loading = false
      this.getCommune()
    })
  }

  async getCommune() {
    const {code} = this.state
    const fields = 'fields=code,nom,centre,departement'
    const query = `communes/${code}?${fields}`

    this.setState({loading: true})

    try {
      const result = await api('https://geo.api.gouv.fr/', query)
      this.setState(state => {
        state.commune = result
        this.getAirQuality()
      })
    } catch (err) {
      this.setState({
        commune: null,
        error: err
      })
    }

    this.setState({loading: false})
  }

  async getAirQuality() {
    const {commune} = this.state
    const {coordinates} = commune.centre
    const query = `lon=${coordinates[0]}&lat=${coordinates[1]}`

    this.setState({loading: true})

    try {
      const results = await api('https://sandbox.geo.api.gouv.fr/prevair?', query)
      this.setState({
        air: results
      })
    } catch (err) {
      this.setState({
        air: null,
        error: err
      })
    }

    this.setState({loading: false})
  }

  onSelect(item) {
    this.setState({commune: item}, this.getAirQuality)
  }

  render() {
    const {commune, air, loading, error} = this.state
    return (
      <div>
        <SearchCommune handleSelect={this.onSelect} />

        <LoadingContent loading={loading} error={error}>
          {commune &&
            <CommuneHeader
              nom={commune.nom}
              departement={commune.departement} />}

          {air &&
            <Fragment>
              <AirQuality {...air} />
              <Footer date={air.date} />
            </Fragment>}
        </LoadingContent>

      </div>
    )
  }
}

Commune.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired,
    query: PropTypes.object.isRequired
  }).isRequired
}

export default (withRouter(Commune))
