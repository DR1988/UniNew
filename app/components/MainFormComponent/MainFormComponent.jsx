import React from 'react'
import s from './MainFormComponent.scss'
import PropTypes from 'prop-types'

import LineFormer from './LineFormerComponent'
import LineDescriptionComponent from './LineDescriptionComponent'
import TimeLine from './TimeLineComponent'
import NoteComponent from './NoteComponent'
import ReactionFlowComponent from './ReactionFlowComponent'

const MainFormComponent = ({ lineFormer, allTime, handle, distance, time }) => (
  <div id="mainForm" className={s.mainForm}>
    <section className={s['user-interaction']}>
      <NoteComponent />
      <ReactionFlowComponent />
    </section>
    <LineDescriptionComponent lineFormer={lineFormer} />
    <section className={s['lines-keeper']}>
      {lineFormer.map((elem, idx) => <LineFormer
        key={idx}
        elem={elem}
        allTime={allTime}
      />,
      )}
      <TimeLine
        distance={distance}
        time={time}
        allTime={allTime}
      />
    </section>
  </div>
)

MainFormComponent.propTypes = {

}

export default MainFormComponent
