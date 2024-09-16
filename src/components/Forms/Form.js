import { Component } from "react";
import "./Form.css"
class Form extends Component{
    constructor(){
        super();
            this.state = {
                inputName : ""
            }
        }
    
    handleNameChange(event) {
        this.setState({
            inputName: event.target.value
        } , ()=> console.log(this.state.inputName))
    }

    handleFormSubmit(){
        console.log("SE ENVIO EL FORMULARIO", this.state.inputName);
    }

    render(){
        return (
            <form onSubmit={(event) => event.preventDefault()}>
                <input
                    onChange={(event)=> this.handleNameChange(event) }
                    name = "userName"
                    value={this.state.inputName}/>
                <button
                    type="submit"> Buscar </button>
            </form>
        )
    }
}
export default Form;