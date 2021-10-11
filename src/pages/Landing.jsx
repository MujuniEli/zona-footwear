import React from 'react'
import Card from "../components/Card";
import { data } from "../library/lib";
import oneStar from "../images/oneStar.jpg"

function Landing() {
    return (
      <div className="landingpage">
        <div className="header">
          <div className="headertxt">
            <h1>WELCOME TO ZONA FOOTWEAR</h1>
            <h3>
              <i>
                The Home of <b>CONVERSE</b> in Uganda
              </i>
            </h3>
          </div>

          <img src={oneStar} height={500} width={500} alt="one star pair" />
        </div>

        <div className="store">
          {data &&
            data.map((lib) => (
              <div key={lib.id}>
                <Card data={lib} />
              </div>
            ))}
        </div>
      </div>
    );
}

export default Landing
