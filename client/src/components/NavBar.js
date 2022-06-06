import { Typography, Box } from "@mui/material";
import { Button, Modal } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import "../Styles/navbarStyles.js";
import useStyles from "../Styles/navbarStyles.js"
import { useState } from "react";
import Login from "./Login.js";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


const NavBar = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
          <Button onClick={handleOpen} variant="contained" color="success">Ingresar </Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} >
   <Login />
  </Box>
</Modal>
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
