import {useState} from "react" 
import "./Form.css"


const BuscarCiudad = ({setData, placeholder, data}) => {
   const [filterData, setFilterDate ] = useState([]);
   const handleChange = (event) => {
       const buscarPalabra = event.target.value
       const newFilter = data.filter((value) => {
         return  value.nombre.toLowerCase().includes(buscarPalabra.toLowerCase())
       })
       return  setFilterDate(newFilter)  
   }
   const selectItem = (event) => {
        const id = event.target.dataset.index;
        const nombre = event.target.textContent;
        document.querySelector('#cancha').value = nombre;
        setFilterDate([]);
        setData(id);
   }

    return (
        <div className= "buscar">
            <div className="buscaInput">
               <input className="iconBusca" id="cancha" type="text" placeholder={placeholder} data={data} onChange= {handleChange}/>
            </div>
            
            {filterData.length !== 0 && (
            <div className= "dataResult" >{filterData.map((value, key ) => {
                return (<button className="canchaItem" data-index={value.id} onClick={selectItem}>{value.nombre}</button>)
                // return( <a className="canchaItem" href={value.link} target="_blank" rel="noreferrer"><p>{value.nombre}</p></a>)
            })}
            </div>
            )}
        </div>
    )

}

export default BuscarCiudad