import React, { useState, useEffect } from 'react';
import Trabajos from './Trabajos.json';
import './Home.css';

const Home = () => {
  const [trabajos, setTrabajos] = useState([]);

  useEffect(() => {
    setTrabajos(Trabajos);
  });

  const limitar6 = trabajos.slice(0, 6);

  return (
    <div className="container">


      <div className="row">
        <div style={styles.container}>
          <h3 style={styles.subtitle}>NASA Business Assessor Official</h3>
          <h1 style={styles.title}>Uriel Strauss</h1>
          <p style={styles.description}>Make your bussines grow faster than light.</p>
        </div>

        <div className="col-md-6" style={styles.imageContainer}>
        <img
            src={"urifotoreal.jpg"}
            className="card-img-top"
            alt=""
            style={{ height: '500px', width: '500px', objectFit: 'cover', borderRadius: '15px' }}
          />
        </div>


      </div>

      
  <section class="loader">

<div className="slider">
</div>
<div className="slider">
</div>
<div className="slider">
</div>
<div className="slider">
</div>
<div className="slider">
</div>
</section>


<p>

</p>

<div className="row gx-6">
  {limitar6.map(creacion => (
    <div key={creacion.id} className="col-md-4">
      <div className="card" style={styles.card}>
        <img src={creacion.imagen} className="card-img-top" alt={creacion.titulo} style={{ height: '200px', width: '100%', objectFit: 'cover', borderRadius: '10px' }} />
        <div className="card-body">
          <h5 className="card-title" style={styles.cardTitle}>{creacion.titulo}</h5>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1%' }}>
            <a href={creacion.url} className="btn btn-primary" style={styles.cardButton}>
              Ver más
            </a>
            <div className="heart-container" title="Like">
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
  container: {
    padding: '80px',
    paddingTop: '110px',
    backgroundColor: '#efe9f7', 
    borderRadius: '13px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    margin: '20px auto',
    marginTop: '60px',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '20px',
    color: '#fff', 
    marginBottom: '10px',
    textTransform: 'uppercase',
    padding: '10px 20px', 
    background: 'linear-gradient(to right, #8b26b4, #336699)', 
    borderRadius: '15px',
    display: 'inline-block', 
  },
  title: {
    marginBottom: '20px',
    fontFamily: 'Georgia, serif', 
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#6929c7', 
  },
  description: {
    color: '#777',
    fontSize: '18px',
    marginBottom: '20px',
    marginTop:'10px'
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    margin: '30px', 
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '15px',
  },
  cardTitle: {
    color: '#fff', 
    fontSize: '18px',
    fontWeight: 'bold',
  },
  
  cardButton: {
    background: '#610C9F',
    border: 'none',
    color: '#fff', 
  },
  
};

export default Home;
