import  { useState } from "react";
import BuscarCiudad from "../Form/BuscarCiudad"
//import DatePicker from "react-datepicker";
import Canchas from  "./data.json";
//import "react-datepicker/dist/react-datepicker.css";
import "./Form.css";
//import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { Grid , styled, Button, Box} from '@mui/material';
import Time from  './Time'
import CardCancha  from './CardCancha'


const Form = () => {
    {/*const  [dateValue, setSelectDate ] = useState(null) */}
    const [canchasData, setCanchasData ] = useState([]);
    const GreenBtn = styled(Button)(({theme})=> ({
        backgroundColor: "#65A844",
        color: '#FFFFFF',
        borderRadius: '16px',
        cursor: 'pointer',
        padding: "7px 35px" ,
        "&:hover": {
            backgroundColor: "rgba(101, 168, 68, 0.56)"
        }  
    })) 
    const [valueDate, setDate] = useState(new Date('2014-08-18T21:11:54'));
 
    const handleChange = (newValue) => {
        setDate(newValue);
   
    }

    const [valueCity, setCity] = useState('');

   

    const search = () => {
        let cancha = Canchas.filter(cancha => cancha.id === valueCity).pop()
        setCanchasData(cancha.canchas); // setCanchasData(data[id].canchas);
    }

    return (
        <>
        <Grid container  sx={{mt:"8rem", mb:"8rem" }} 
            spacing={3}
            direction="row"
            align="center"
            justify="center"
           
            
            
            style={{ minHeight: '100px' }} >
        <Grid item xs={12}  sm={12} md= {4}>
            
            <BuscarCiudad setCity={setCity} placeholder={"¿Donde queréis jugar?"} data={Canchas} />
            {/*<DatePicker select= {dateValue} 
                onChange= {date => setSelectDate(date)}
                dateFormat = 'dd/MM/yyyy'
                minDate = {new Date()}
                inputClass="custom-input"
                isClearable
        
        /> */}
        </Grid>
        <Grid item  xs={12}  sm={12} md= {4}>
            <LocalizationProvider   dateAdapter={AdapterDateFns} >
            <Box  display={{ xs: "block", sm: "block", md: "flex" }} >
                    
                    <DesktopDatePicker spacing={2}
                        label="Fecha"
                        
                        inputFormat="MM/dd/yyyy"
                        value={valueDate}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params}
                        />}

                    />
                
                    {/*<MobileDatePicker
                        label="Date mobile"
                        inputFormat="MM/dd/yyyy"
                        value={valueDate}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />/>*/}
                 
                       {/* <TimePicker 
                            label="Time"
                            value={valueDate}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}

                    />*/}
                    
                    <Time/>
                  
                    
                 </Box>
                    </LocalizationProvider>

                    </Grid>
                   
                    
                    <Grid item  xs={12}  sm={12} md= {4}>
                    <GreenBtn  variant="contained" onClick={search}>Buscar</ GreenBtn>
                    </Grid>
                </Grid>
                {canchasData.length !== 0 && (
                <div className="canchasContainer">
                    {canchasData.map((value, key) => {
                        return <CardCancha key={key} data={value}/>;
                    })}
                </div>
            )}
        </>
     )  
    
}

export default Form