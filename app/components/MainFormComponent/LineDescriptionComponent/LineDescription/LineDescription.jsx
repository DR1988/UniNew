import React from 'react'
import s from './LineDescription.scss'

const LineDecription = ({ valve, currenrtElem }) => {
  // console.log('valve', valve);
  const descriotionShow = (valve) => {
    switch (valve) {
      case 'GV1':
        return 'Inert gas inlet into reagent chamber 1'
      case 'GV2':
        return 'Inert Gas Outlet from reagent chamner 1'
      case 'GV3':
        return 'Inert gas inlet into reagent chamber 2'
      case 'GV4':
        return 'Inert Gas Outlet from reagent chamner 2'
      case 'GV5':
        return 'Inert gas inlet into reaction camera'
      case 'GV6':
        return 'Inert gas outlet from reaction camera'
      case 'HV1':
        return 'Inert Gas Inlet'
      case 'HV2':
        return 'Inert Gas Inlet'
      default:
        return 'Inert Gas'
    }
  }
  return (
    valve === currenrtElem.ShortName ? <div className={s['lineDecription-container']}>
      <span>
        {descriotionShow(valve)}
      </span>
    </div> : null
  )
}

export default LineDecription
