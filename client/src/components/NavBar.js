
import Logo from  "../Images/field.svg"
import './../Styles/navbar.css'


const NavBar = () =>  {
    return (
        <div className="nav">
            <div >
                <h1 className="title">La Cancha</h1>
               {/* <a href="home" className="" ><img src= {Logo} alt = "#"/></a>  */}
                <span className="subtitle">Reservo mi cancha</span>
            </div>
        <nav>
            <ul className="navul">
                
                <li><a href="#centro">Perfil</a></li>
                <li><a href="#favoritas">Favoritas</a></li>
                <li><a href="#buscar">Buscar</a></li>
                <li><a href="#registrate">Registrate</a></li>
                <li><a href="#ingressa">Ingresar</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default NavBar 