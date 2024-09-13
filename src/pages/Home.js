import React from "react";
import Peliculas from "../components/Peliculas/Peliculas";
import Form from "../components/Forms/Form";
const Home = (props) => {
  return (
      <>
       <Form/>
        <div className="home">
            <Peliculas/>
            
        </div>
      </>
  );
}
export default Home;