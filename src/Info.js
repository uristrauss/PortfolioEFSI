import React from "react";
import './Info.css';

const Info = () => {
  return (
    <div>
    <h2 style={styles.title}>Mi Informacion</h2>
    <div className="centered">
      <div className="cardINFO">
        <div className="cardINFO-details">
          <h2 className="text-title">Uriel Strauss</h2>
          <img
            src={"bigote.jpeg"}
            className="card-img-top rounded-circle"
            alt=""
            style={{ height: '230px', width: '230px', objectFit: 'cover' }}
          />
          <h5 className="text-body">Futuro ingeniero industrial</h5>
          <h6 className="text-body">Edad: 17</h6>
          <p className="text-body">Un crack total jugando al tenis.</p>
        </div>
        <a className="cardINFO-button" href="https://www.linkedin.com/in/uriel-strauss-527997263/">Conoceme mas!</a>
      </div>
      </div>
    </div>
  );
};

const styles = {
  title: {
    marginBottom: '20px',
    fontFamily: 'Georgia, serif',
    fontSize: '48px',
    fontWeight: 'italic',
    color: '#000000',
  }
};

export default Info;
