import {format} from 'url'
import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'next/router'
import debounce from 'debounce'

import api from '../lib/api'

import SearchInput from './search-input'
import Notification from './notification'
import renderCommune from './search-input/render-commune'

class SearchCommune extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      results: [],
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
    this.setState({input: item.nom})
    const {router} = this.props
    const query = {...router.query, code: item.code}
    const url = format({pathname: '/commune', query})
    router.push(url)
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

  render() {
    const {input, results, loading, error} = this.state

    return (
      <div>
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

        <style jsx>{`
          .error {
            margin: 1em 0;
          }
          `}</style>
      </div>
    )
  }
}

SearchCommune.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired,
    query: PropTypes.object.isRequired
  }).isRequired
}

export default (withRouter(SearchCommune))
