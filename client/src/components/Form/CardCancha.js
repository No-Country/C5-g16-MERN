
import {IconButton,
     Typography, CardContent, CardMedia, CardHeader,Card, Grid,styled, Button} from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupsIcon from '@mui/icons-material/Groups';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';


const GreenBtn = styled(Button)(({theme})=> ({
    backgroundColor: "#65A844",
    color: '#FFFFFF',
    borderRadius: '16px',
    cursor: 'pointer',
    padding: "10px 20px" ,
    "&:hover": {
        backgroundColor: "rgba(101, 168, 68, 0.56)"
    }  
})) 
const CardCancha = ({data}) => {
    return (
        <Grid container 
       
        style={{ minHeight: '300px', padding: '4rem' }}
        >
            <Grid item xs={12}  sm={12} md= {6}>
            <Card sx={{ maxWidth: 300 }}>
            <CardHeader title={data.nombre} 
            subheader=""/>
            <CardMedia
            component="img"
            height="194"
            image={require("../../Images/" + data.img)}
            alt="cancha1"
      />
                <CardContent>
                   
                    <Typography variant="body2" >
                        <IconButton aria-label="share">
                            <LocationOnIcon/>
                        </IconButton>  {data.direccion}
                    </Typography>
                    <Typography variant="body2" ><IconButton aria-label="share">
                        <WhatsAppIcon/>
                    </IconButton>{data.telefono}</Typography>
                    <Typography>
                        <IconButton >
                        <AttachMoneyIcon/> </IconButton> {data.precio}
                    </Typography>
                    <Typography>
                        <IconButton >
                            <GroupsIcon/> 
                       </IconButton> 
                       {data.cantidad}
                    </Typography>
                    <Typography>
                        <IconButton >
                            <SportsSoccerIcon/>
                       </IconButton> 
                       {data.descripción}
                    </Typography>
                    <Typography>
                        <IconButton >
                            <DirectionsCarIcon/>
                       </IconButton> 
                       {data.parqueadero}
                    </Typography>
                    <GreenBtn  variant="contained" >Reservar</ GreenBtn>
                    </CardContent>
            
        </Card>
        </Grid>
        </Grid>
    )
}

export default CardCancha