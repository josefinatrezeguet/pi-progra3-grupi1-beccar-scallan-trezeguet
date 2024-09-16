import React from "react";
import { Component } from "react";
import Form from "../components/Forms/Form"


class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
      return(
        <>
          <Form Form history ={this.props.history}/>
        </>
      )
    }

}
export default Home;