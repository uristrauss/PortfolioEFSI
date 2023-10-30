import React, { useState, useEffect } from 'react';
import Trabajos from './Trabajos.json';

const Creaciones = () => {
    const [trabajos, setTrabajos] = useState([]);

    useEffect(() => {
    setTrabajos(Trabajos);
    });

    return (
        <div className="container">
          <h1>Mis Creaciones</h1>
          <div className="row">
            {trabajos.map(creacion => (
              <div key={creacion.id} className="col-md-4 mb-3">
                <div className="card">
                  <img src={creacion.imagen} className="card-img-top" alt={creacion.titulo} style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title">{creacion.titulo}</h5>
                    <p className="card-text">{creacion.descripcion}</p>
                    <p className="card-text">Date: {creacion.fecha}</p>
                    <a href={creacion.url} className="btn btn-primary">View more</a>
                    {/* Add favorite button or functionality here */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Creaciones;  