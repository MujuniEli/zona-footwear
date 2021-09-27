import React from 'react'
import Card from '../components/Card'
import {data} from '../library/lib'


function Home() {
    console.log(data);
    return (
        <div className="home">
            {data &&
                data.map(lib =>(
                    <div key={lib.id}>

                        <Card productName={lib.product} img={lib.image} price={lib.price} id={lib.id}/>
                    </div>
                ))
            }
        </div>
    )
}

export default Home
