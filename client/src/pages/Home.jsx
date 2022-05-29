import React from "react";
import Header from "../components/NavBar";
import Footer from "../components/Footer";
import Slider from "../components/Carousel";
import Form from "../components/Form/Form";
import { Container } from '@mui/material';


const Home = () => {
  return (
    <div>
      <Container maxwidth= "lg">
        <Header />
        <Slider />
        <Form/>
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
