import React from "react";
import Footer from "../components/Footer";
import Slider from "../components/Carousel";
import Form from "../components/Form/Form";
import Header from "../components/Header.js";



const Home = () => {
  return (
    <div>
          <Header/>
          <Slider />
          <Form/>
          <Footer/>
      
      
    </div>
  );
};

export default Home;
