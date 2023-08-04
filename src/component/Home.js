import React from "react";
import { NavLink } from "react-router-dom";
import web from '../images/plan.png'
import Common from "./Common";


const Home = () => {
  return (
    <>
      <Common 
        name="Grow your business with"
        img='https://source.unsplash.com/600x400/?airplan'
        visit='/services'
        btnname='Get Started'
      />
    </>
  );
};

export default Home;
