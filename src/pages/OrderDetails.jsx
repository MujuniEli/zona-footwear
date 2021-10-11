import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function OrderDetails() {
    const { id } = useParams();
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = `https://martserver.herokuapp.com/api/v1/product/${id}`;

    useEffect(() => {
            fetch(url)
            .then((response) => response.json())
            .then((json) => setInfo(json))
            .catch((e) => console.log(e))
            .finally(() => setLoading(false))
    }, [url])
    return (
      <div>
        <h1>Order Details</h1>

        {loading ? (
          "Fetching Data"
        ) : (
          <div>
            <p> {info.user.id}</p>
            <p> {info.user.name}</p>
            <p> {info.user.email}</p>
          </div>
        )}
        <button>
          {" "}
          <Link to="/admin">Admin Page</Link>{" "}
        </button>
      </div>
    );
}

export default OrderDetails
