import React from "react";
import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import data from "../data/db.json";
//  test

function Home(props){
  return(
    <>
    <Header/>
    <Tours travelData={props.data}/>
    <Footer/>
    </>
  )
}

export default Home;