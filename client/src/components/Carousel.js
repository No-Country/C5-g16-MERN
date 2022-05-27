import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import "react-awesome-slider/dist/captioned.css";
import './../Styles/slider.css'


const AutoplaySlider = withAutoplay(AwesomeSlider);


const Slider = ()=> {
    return(
        <>
        <div className='titleBox'>
  <h4 className='title'> Nueva Cancha en San Telmo</h4>
  </div>
  <AutoplaySlider
    play
    cancelOnInteraction={true} // should stop playing on user interaction
    interval={3000}
    className="imgSlider"
  >
    <div> 
        <img 
        src="https://res.cloudinary.com/danb0chax/image/upload/v1653411189/La-cancha/pexels-jonathan-petersson-399187_r1xokv.jpg" 
        alt="1"/>
        
        </div>  
        
    <div  data-src="https://res.cloudinary.com/danb0chax/image/upload/v1653411195/La-cancha/pexels-rfstudio-3621104_r7jlcc.jpg" alt="2" />
  
    <div  data-src="https://res.cloudinary.com/danb0chax/image/upload/v1653411186/La-cancha/soccer-g6a4498358_1920_wks1eg.jpg" alt="3" />
  </AutoplaySlider>
  
  </>
)};

export default Slider