import React, { Fragment } from 'react'

const Sushi = ({key, id, name, img_url, price, eaten, eatSushi}) => {
  

  
  return (
    
    <div className="sushi" key={key}>

      <div className="plate" >
        {  
          eaten ?
            null
          :
            <img src={ img_url } width="100%" onClick={() => eatSushi(id, price)}/>
        }
      </div>
     
      <h4 className="sushi-details">
        { name } - ${ price }
      </h4>
    </div>
  )
}

export default Sushi