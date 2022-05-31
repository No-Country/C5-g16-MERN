import { Typography, Box } from "@mui/material";
import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import "../Styles/navbarStyles.js";
import useStyles from "../Styles/navbarStyles.js"

const NavBar = () => {
  const classes = useStyles()
  return (
    <>
    <div className={classes.nav}>
      <div>
        <h1 className={classes.title}>La Cancha</h1>
       
        <span className={classes.subtitle}>
          Canchas cerca para jugar con los amigos
        </span>
      </div>
      <nav>
        <ul className={classes.navul}>
          <li>
            <Link to="/login">
              <Button variant="contained" size="small" color="success" className={classes.goButton}>Ingresar</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <Box>
      <p className={classes.miniSub}>Canchas cerca para jugar con los amigos</p>
      </Box>
    </>
  );
};

export default NavBar;
