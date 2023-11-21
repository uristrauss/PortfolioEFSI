import React, { useState, useEffect } from 'react';
import Trabajos from './Trabajos.json';
import './Creaciones.css';

const Creaciones = () => {
  const [trabajos, setTrabajos] = useState([]);

  useEffect(() => {
    setTrabajos(Trabajos);
  }, []);

  return (
    <div className="row gx-6">
      {trabajos.map((creacion) => (
        <div key={creacion.id} className="col-md-4 mb-5"> 
          <div className="card">
            <img
              src={creacion.imagen}
              className="card-img-top"
              alt={creacion.titulo}
              style={{ height: '35%', width: '100%', objectFit: 'cover', borderRadius: '10px' }}
            />
            <div className="card-body">
              <h5 className="card-title text-white">{creacion.titulo}</h5>
              <p className="card-text text-white">{creacion.descripcion}</p>
              <p className="card-text text-white">Date: {creacion.fecha}</p>
              <a href={creacion.url} className="btn btn-purple">
                Ver más
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Creaciones;
