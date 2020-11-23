import React, { Fragment } from 'react'

const Sushi = ({id, name, img_url, price, eaten, eatSushi}) => {
  
  return (
    
    <div className="sushi" key={id}>
      <div className="plate" 
      
           onClick={() => eatSushi(id, price)}>
        {  eaten ?
            null
          :
            <img src={ img_url } width="100%" />
        }
      </div>
     
      <h4 className="sushi-details">
        { name } - ${ price }
      </h4>
    </div>
  )
}

export default Sushi