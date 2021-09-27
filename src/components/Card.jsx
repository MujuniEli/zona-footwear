import React from 'react'
 
        function Card(props) {
            return (
                <div className="card">
                    <div className="card_image">
                   <img src={props.img} alt="pdt" height="300px" width="300px"/>
                    </div>
                   <div className="card_description">
                       <h4>{props.productName}</h4>
                       
                        <div className="buyBtn">
                            <span>Shs:{props.price}</span>   
                            <button>Buy</button>
                        </div>
                   </div>
                   
                </div>
            )
        }


export default Card