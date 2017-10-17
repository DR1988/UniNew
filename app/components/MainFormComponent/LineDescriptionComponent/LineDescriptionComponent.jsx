import React, { Component } from 'react'
import PropTypes from 'prop-types'

import s from './LineDescriptionComponent.scss'

import LineDescription from './LineDescription'

class LineDescriptionComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      elem: {},
    }
  }

  showElem = (elem) => {
    this.setState({
      elem,
    })
  }

  hideElem = () => {
    this.setState({
      elem: {},
    })
  }

  render() {
    const { lineFormer } = this.props
    return (
      <aside
        className={s.root}
      >
        {lineFormer.map(elem => <div className={s.description} key={elem.id}>
          <span
            className={s.sign}
            onMouseEnter={() => this.showElem(elem)}
            onMouseLeave={() => this.hideElem()}
          >
            {elem.ShortName}
          </span>
          <LineDescription valve={elem.ShortName} currenrtElem={this.state.elem} />
        </div>)}
      </aside>
    )
  }
}

LineDescriptionComponent.propTypes = {

}

export default LineDescriptionComponent
