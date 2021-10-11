import React from 'react'
import { useNavigate } from 'react-router-dom'

function Table({ data }) {
    const history = useNavigate();

    function productIdHandle(id){
        history.push(`/productdetails/${id}`)
    }
    return (
      <div>
        {data ? (
          <table>
            <thead>
              <tr>
                <th>Pdt_id</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Client</th>
                
              </tr>
            </thead>
            <tbody className="table_body">
              {data.map((data) => (
               

                <tr key={data.id} onClick={() => productIdHandle(data.id)}>
                  <td>{data.id}</td>
                  <td>{data.product}</td>
                  <td>{data.quantity}</td>
                  <td>{data.amount}</td>

                  <td>{data.user.name}</td>
                 
                </tr>
               
              ))}
            </tbody>
          </table>
        ) : (
          "loading..."
        )}
      </div>
    );
}

export default Table
