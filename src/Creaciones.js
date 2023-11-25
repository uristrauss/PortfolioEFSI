import React, { useState, useEffect, useContext } from 'react';
import Trabajos from './Trabajos.json';
import './Creaciones.css';
import { MyContext } from './Favoritos';

const Creaciones = () => {
  const [trabajos, setTrabajos] = useState([]);
  const { favoritos, setFavoritos } = useContext(MyContext);

  useEffect(() => {
    setTrabajos(Trabajos);
  }, []);

  const chequearFavoritos = (trabajos) => {
    //ya esta dentro de favoritos??
    const esFavorito = favoritos.some((fav) => fav.id === trabajos.id)

    if (esFavorito) {
      //agregar el objeto a favoritos
      const actualizarFavoritos = favoritos.filter((fav) => fav.id !== trabajos.id);
      setFavoritos(actualizarFavoritos);
    }
    else {
      //sacar el objeto de favoritos
      setFavoritos([...favoritos, trabajos]);
    }
    }
    
    //guardar en el local storage
    localStorage.setItem('favoritos', JSON.stringify(favoritos));

  return (
    <div>
      <h2 style={styles.title}>Todos mis trabajos</h2>
      <div className="row gx-6">
        {trabajos.map((creacion) => (
          <div key={creacion.id} className="col-md-4 mb-5"> 
            <div className="card">
              <img
                src={creacion.imagen}
                className="card-img-top"
                alt={creacion.titulo}
                style={{ height: '35%', width: '100%', objectFit: 'cover', borderRadius: '10px', marginBottom:'-18px' }}
              />
              <div className="card-body">
                <h5 className="card-title text-white">{creacion.titulo}</h5>
                <p className="card-text text-white">{creacion.descripcion}</p>
                <p className="card-text text-white">Fecha: {creacion.fecha}</p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <a href={creacion.url} className="btn btn-primary" style={styles.cardButton} >
                    Ver más
                  </a>

                  <div className="heart-container" title="Like" onClick={() => chequearFavoritos(creacion)}>
                    <input type="checkbox" className="checkbox" id={`Give-It-An-Id-${creacion.id}`} />
                    <div className="svg-container">
                      <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" />
                      </svg>
                      <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" />
                      </svg>
                      <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="10,10 20,20"></polygon>
                        <polygon points="10,50 20,50"></polygon>
                        <polygon points="20,80 30,70"></polygon>
                        <polygon points="90,10 80,20"></polygon>
                        <polygon points="90,50 80,50"></polygon>
                        <polygon points="80,80 70,70"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  cardButton: {
    background: '#610C9F',
    border: 'none',
    color: '#fff', 
  },
  title: {
    marginBottom: '20px',
    fontFamily: 'Georgia, serif', 
    fontSize: '48px',
    fontWeight: 'italic',
    color: '#000000', 
  }
};

export default Creaciones;
