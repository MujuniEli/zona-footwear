import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Table from '../components/Table'

function Admin() {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch("https://martserver.herokuapp.com/api/v1/product")

        .then((response) => response.json())
        .then((json) => setInfo(json))
        .catch((e)=>console.log(e))
        .finally(()=>setLoading(false))

    }, [])
    return (
      <div className="admin">
        <div className="sidebar">
          <ul>
            <Link to="/admin">
              <li>All Items</li>
            </Link>
            <Link to="/admin">
              <li>Users</li>
            </Link>
          </ul>
        </div>
        <div className="body">
            {loading ? "Fetching Data": <Table data={info}/>}
        </div>
      </div>
    );
}

export default Admin
