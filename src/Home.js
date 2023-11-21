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
        <img src={creacion.imagen} className="card-img-top" alt={creacion.titulo} style={{ height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
        <div className="card-body">
          <h5 className="card-title" style={styles.cardTitle}>{creacion.titulo}</h5>
          <a href={creacion.url} className="btn btn-primary" style={styles.cardButton}>View more</a>
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
    backgroundColor: '#efe9f7', // Light gray background
    borderRadius: '13px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    margin: '20px auto',
    marginTop: '60px',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '20px',
    color: '#fff', // White text
    marginBottom: '10px',
    textTransform: 'uppercase',
    padding: '10px 20px', // Added padding
    background: 'linear-gradient(to right, #8b26b4, #336699)', // Gradient background
    borderRadius: '15px', // Rounded corners
    display: 'inline-block', // Display as inline block
  },
  title: {
    marginBottom: '20px',
    fontFamily: 'Georgia, serif', // Elegant font
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
