import React, {Component} from 'react'
//import "./EstiloFormulario.css"

class Formulario extends Component{
    render(){
        return(
            <div className="row">
                <form>
                    <div className="input-field col s10">
                        <input type="text" id="mensaje" className="white-text"/>
                        <label htmlFor="mensaje" className="grey-text text-lighten-1">Escribe tu mensaje</label>
                    </div>
                    <button className="btn-floating waves-effect waves-light teal darken-1 btn-large" type="submit" style={{marginLeft:'30px'}}><i className="material-icons right">send</i></button>
                </form>
           </div>
        )
    }
}

export default Formulario