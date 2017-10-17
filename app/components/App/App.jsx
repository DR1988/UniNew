import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Main from '../../containers/Main'

const App = ({ store }) => (
  <Provider store={store}>
    {/* <MuiThemeProvider> */}
      <Main />
    {/* </MuiThemeProvider> */}
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired, //eslint-disable-line react/forbid-prop-types
}

export default App
