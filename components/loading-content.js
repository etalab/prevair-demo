import PropTypes from 'prop-types'

import Loader from './loader'
import Notification from './notification'

const LoadingContent = ({loading, error, children}) => {
  if (loading) {
    return (
      <div className='loader'>
        <Loader />
        <style jsx>{`
          .loading {
            margin: 1em 0;
          }
        `}</style>
      </div>
    )
  } else if (error) {
    return (
      <div className='error'>
        <Notification message={error.message} type='error' />
        <style jsx>{`
          .error {
            margin: 1em 0;
          }
        `}</style>
      </div>
    )
  }

  return children
}

LoadingContent.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

export default LoadingContent
