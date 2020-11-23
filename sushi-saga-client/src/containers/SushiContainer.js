import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const renderSushis = props.sushis.map(sushi => {
    return <Sushi {...sushi} key={sushi.id} eatSushi={props.eatSushi} />
  })

  return (
    <Fragment>
      <div className="belt">
        {console.log(props)}
          { renderSushis }    
        
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer