import React, { useContext } from "react";
import { createContext } from "react";
export const MyContext = createContext("");


const Favoritos = () => {
const {favoritos, setFavoritos} = useContext(MyContext);

return (
    <div>
      <h2>Favoritos</h2>
      <ul>
        {favoritos.map((trabajo) => (
          <li key={trabajo.id}>{trabajo.titulo}</li>
        ))}
      </ul>
    </div>
  );
  
}

export default Favoritos;