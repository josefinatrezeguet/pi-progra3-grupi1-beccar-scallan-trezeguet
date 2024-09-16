import { Component } from "react";
import "./Form.css"

class Form extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            query: "",
        };
    }
    
    handleCancelSubmit(e){
        e.preventDefault()
    };

    handleFormChange(event) {
        this.setState({
            query: event.target.value
        }) 
    }

    handleFormSubmit(){
        this.props.history.push("/search",{query: this.state.query})
    }

    render(){
        return (
            <>
            <div>
                <form onSubmit={(event) => this.handleCancelSubmit(event)}>
                    <input
                        name = "query"
                        onChange={(event)=> this.handleNameChange(event) }
                        value={this.state.query}/>
                    <button OnClick = {()=> this.handleFormSubmit()}> Search </button>
                
                </form>
            </div>
            </>
        )
    }
}
export default Form;