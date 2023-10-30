import React, { useState, useEffect } from 'react';
import Trabajos from './Trabajos.json';

const Home = () => {
    const [trabajos, setTrabajos] = useState([]);

    useEffect(() => {
    setTrabajos(Trabajos);
    });

    const limitar6 = trabajos.slice(0, 6);

    return(

        




        <div className="container">
            <div className="me-3">
                  <img
                    src={"urifotoreal.jpg"}
                    className="card-img-top"
                    alt=""
                    style={{height:'500px', width:'500px',   objectFit: 'cover' }}
                  />
                </div>


        <h1>Mis HOMES</h1>
        <div className="row">
          {limitar6.map(creacion => (
            <div key={creacion.id} className="col-md-4 mb-3">
              <div className="card">
                <img src={creacion.imagen} className="card-img-top" alt={creacion.titulo} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{creacion.titulo}</h5>
                  <a href={creacion.url} className="btn btn-primary">View more</a>
                </div>
              </div>


            </div>
          ))}
        </div>


        
      </div>  

      
        

    )
}

export default Home;