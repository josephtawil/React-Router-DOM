import React from 'react'


const Card = (props) => {
    
    return (
        <div>
            <div className="container">
            <div className="card" >
  <div className="card-body">
    <h5>{props.name}</h5>
  </div>
</div>
            </div>
        </div>
    )
}

export default Card
