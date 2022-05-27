import { Link, useParams } from "react-router-dom";
import "./../Styles/navbar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <div>
        <h1 className="title">La Cancha</h1>
        {/* <a href="home" className="" ><img src= {Logo} alt = "#"/></a>  */}
        <span className="subtitle">
          Canchas cerca para jugar con los amigos
        </span>
      </div>
      <nav>
        <ul className="navul">
          <li>
            <a href="#centro">Perfil</a>
          </li>
          <li>
            <a href="#favoritas">Favoritas</a>
          </li>
          <li>
            <a href="#buscar">Buscar</a>
          </li>
          <li>
            <a href="#registrate">Registrate</a>
          </li>
          <li>
            <Link to="/login" className="btn btn-primary">
              Ingresar
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
