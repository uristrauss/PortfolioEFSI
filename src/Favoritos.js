import React, { useContext } from "react";
import { createContext } from "react";
export const MyContext = createContext("");


const Favoritos = () => {
const {favoritos, setFavoritos} = useContext(MyContext);

return (
  <div>
    <h2 style={styles.title}>Trabajos favoritos</h2>
    <div className="row gx-6">
      {favoritos.map((trabajo) => (
        <div key={trabajo.id} className="col-md-4 mb-5">
          <div className="card">
            <img
              src={trabajo.imagen}
              className="card-img-top"
              alt={trabajo.titulo}
              style={{
                height: '35%',
                width: '100%',
                objectFit: 'cover',
                borderRadius: '10px',
                marginBottom: '-18px',
              }}
            />
            <div className="card-body">
              <h5 className="card-title text-white">{trabajo.titulo}</h5>
              <p className="card-text text-white">{trabajo.descripcion}</p>
              <p className="card-text text-white">Fecha: {trabajo.fecha}</p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <a href={trabajo.url} className="btn btn-primary" style={styles.cardButton}>
                  Ver más
                </a>
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

export default Favoritos;