import  { useState } from "react";
import {InputLabel, MenuItem, FormControl, Select } from '@mui/material';



export default function Time() {
    
    const [time, setTime] = useState('');

    const handleChange = (event) => {
    setTime(event.target.value);
    }
    return (
        <FormControl >
        <InputLabel id="selectLabel">Hora</InputLabel> 
      
        <Select sx={{width: "230px" }}
          labelId="selectLabel"
          id="selectLabel"
          value={time}
          label="Hora"
          onChange={handleChange}
         
        >
            
          <MenuItem value={13}>13:00</MenuItem>
          <MenuItem value={14}>14:00</MenuItem>
          <MenuItem value={15}>15:00</MenuItem>
         
        </Select>
        </FormControl>
    )
} 
