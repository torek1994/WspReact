import React, {Component} from 'react'
//import "./EstiloFormulario.css"

export class Formulario extends Component{
    state = {
        texto: ''
    }

isNullOrWhiteSpace = (elemento) => {
    return elemento.replace(/\s/g, '').length < 1;
}

handleChange = (e) => {
    this.setState({
        texto: e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault();
    let elemento = this.isNullOrWhiteSpace(this.state.texto);
    if(!elemento){
        console.log(this.target)
        this.props.addForm(this.state);
        this.setState({
            texto: ''
        })
    }
}

//class Formulario extends Component{
    render(){
        return(
            <div className="row">
                <form>
                    <div className="input-field col s10" onSubmit={this.handleSubmit}>
                        <input type="text" id="mensaje" className="white-text" onChange={this.handleChange} value={this.state.texto}/>
                        <label htmlFor="mensaje" className="grey-text text-lighten-1">Escribe tu mensaje</label>
                    </div>
                    <button className="btn-floating waves-effect waves-light teal darken-1 btn-large" type="submit" style={{marginLeft:'30px'}}><i className="material-icons right">send</i></button>
                </form>
           </div>
        )
    }
}

export default Formulario