import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import './Layout.css';

function Layout({ children }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
    reset(); 
  };

  return (
    <div>


      <nav className="custom-navbar navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          CATALOGO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Creaciones" className="nav-link">
                Creaciones
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Favoritos" className="nav-link">
                Favoritos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Info" className="nav-link">
                Info
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

      <main className="container mt-4">{children}</main>


      <footer className="footer mt-4 py-5" style={{ backgroundColor: "#e6e6fa" }}>
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h5>Contacto</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Mensaje
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              {...register("message", { required: true })}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
      <div className="col-md-6">
        <h5>Social Networks</h5>
        <div className="d-flex align-items-center mb-3">
          <div className="me-3">
            <img
              src={"linkedin.png"}
              className="card-img-top"
              alt=""
              style={{ height: '40px', width: '40px', objectFit: 'cover', borderRadius: '50%', backgroundColor: '#3b5998' }}
            />
          </div>
          <div>
            <a href="https://www.linkedin.com/in/uriel-strauss-527997263/" style={{ color: '#333' }}>
              <i className="fab fa-linkedin me-1"></i> Uriel Strauss
            </a>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="me-3">
            <img
              src={"instagram.png"}
              className="card-img-top"
              alt=""
              style={{ height: '60px', width: '60px', objectFit: 'cover', borderRadius: '50%', backgroundColor: '#e4405f' }}
            />
          </div>
          <div>
            <a href="https://www.instagram.com/uristrauss_/" style={{ color: '#333' }}>
              <i className="fab fa-instagram me-1"></i> @uristrauss_
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>



    </div>
  );
}

export default Layout;