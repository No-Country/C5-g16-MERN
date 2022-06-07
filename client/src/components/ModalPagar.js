import { useState } from 'react';
import Button from '@mui/material/Button';
import {Dialog, 
   
    DialogContent,
    DialogContentText,
    DialogTitle,
    Radio,
    RadioGroup,
    FormControlLabel ,
    FormControl,
    FormLabel,
    styled
   

} from '@mui/material';


const GreenBtn = styled(Button)(({theme})=> ({
  backgroundColor: "#65A844",
  color: '#FFFFFF',
  borderRadius: '16px',
  cursor: 'pointer',
  padding: "10px 20px" ,
  "&:hover": {
      backgroundColor: "rgba(101, 168, 68, 0.56)"
  }, 
  marginBottom: '1.4rem',
})) 
    


const ModalPagar = () => {
const [open, setOpen] = useState()
const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [option, setOption] = useState('en la Cancha');

  const handleOption = (event) => {
    setOption(event.target.value);
  };
    return (
        <div>
        <GreenBtn sx= {{marginLeft: 'auto'}} variant="outlined" onClick={handleClickOpen}>
        Reservar Ahora
        </GreenBtn>
        <Dialog 
        open={open}
        onClose={handleClose}
>
            <DialogTitle>
                {"¿como quieres realizar tu pago?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                <FormControl>
                 {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>*/}
                    <RadioGroup value={option} onChange={handleOption}>
                        <FormControlLabel value="cancha" control={<Radio />} label="en la Cancha" />
                        <FormControlLabel value="payPal" control={<Radio />} label="paypal" />
                      </RadioGroup>
                    </FormControl>
                 
                </DialogContentText>

            </DialogContent>
            <GreenBtn sx = {{mx: 'auto', px: '25px'}}>Confirmar pago</GreenBtn>
        </Dialog>
        </div>
    )
}




export default ModalPagar

