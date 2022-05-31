import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import "react-awesome-slider/dist/captioned.css";
import './../Styles/slider.css'


const AutoplaySlider = withAutoplay(AwesomeSlider);


const Slider = ()=> {
    return(
        <>
        <div className='txtBox'>
  <h4 className='txtTitle'> Nueva Cancha en San Telmo</h4>
  </div>
  <AutoplaySlider
    play
    cancelOnInteraction={true} // should stop playing on user interaction
    interval={3000}
    className="imgSlider"
  >
    <div> 
        <img 
        src="https://res.cloudinary.com/danb0chax/image/upload/v1654025220/La-cancha/Frame_4_r3hf5e.jpg" 
        alt="1"/>
        
        </div>  
        
    <div  data-src="https://res.cloudinary.com/danb0chax/image/upload/v1654024185/La-cancha/Frame_2_ytt8eq.jpg" alt="2" />
  
    <div  data-src="https://res.cloudinary.com/danb0chax/image/upload/v1654024185/La-cancha/Frame_3_bvhgcq.jpg" alt="3" />
  </AutoplaySlider>
  
  </>
)};

export default Slider