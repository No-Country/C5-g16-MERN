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
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { Grid } from '@mui/material';


const Form = () => {
    {/*const  [dateValue, setSelectDate ] = useState(null) */}
    const [valueDate, setDate] = useState(new Date('2014-08-18T21:11:54'));
 
    const handleChange = (newValue) => {
        setDate(newValue);
   
    }
    return (
        <>
        <Grid container  sx={{mt:"8rem"}} direction="row"
        justifyContent="space-evenly"
        alignItems="center" spacing={3} >
        <Grid item xs={12}  sm={12} md= {6}>
            <BuscarCiudad placeholder={"¿Donde queréis jugar?"} data={Canchas} />
            {/*<DatePicker select= {dateValue} 
                onChange= {date => setSelectDate(date)}
                dateFormat = 'dd/MM/yyyy'
                minDate = {new Date()}
                inputClass="custom-input"
                isClearable
        
        /> */}
        </Grid>
        <Grid item  xs={12}  sm={12} md= {6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            
                <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/dd/yyyy"
                    value={valueDate}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}

                />
                {/*<MobileDatePicker
                    label="Date mobile"
                    inputFormat="MM/dd/yyyy"
                    value={valueDate}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
    />*/}
                <TimePicker 
                    label="Time"
                    value={valueDate}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}

                />

                </LocalizationProvider>
                </Grid>
            </Grid>
        </>
     )  
    
}

export default Form