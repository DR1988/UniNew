import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import MainComponent from '../../components/MainComponent'
import { actions } from './mainRedux'

const Main = props => <MainComponent {...props} />

Main.propTypes = {
  currentForm: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  currentForm: state.mainReducer.currentForm,
})

export default connect(mapStateToProps, actions)(Main)
