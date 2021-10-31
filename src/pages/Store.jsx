import React from 'react'
import Card from '../components/Card'
import {data} from '../library/lib'


function Store() {
    //console.log(data);
    return (
        <div className="store" style={{ paddingTop: '85px' }}>
            {data &&
                data.map(lib =>(
                    <div key={lib.id}>
                        <Card data={lib}/>
                    </div>
                ))
            }
        </div>
    )
}

export default Store
