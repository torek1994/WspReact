import React, {Component} from 'react'
import whatsapp from './wsp1.jpg'
import Bloque  from './Bloque'
import Formulario from './Formulario'

class Caja extends Component{
    
    state = {
        preguntas:[]
    }
    
    addForm = (pregunta) => {
        let preguntasAux = [...this.state.preguntas, pregunta];
        this.setState({
            preguntas:preguntasAux
        })
    }
    
    render(){
    let estiloCaja = {
        backgroundImage: `url(${whatsapp})`,
        backgroundColor: '#ece5dd',
        width: '620px',
        height: '880px',
        paddingTop: '10px',
        paddingLeft: '5px',
        paddingRight: '5px',
        paddingBottom: '20px'
        };
        
        let bloques = this.state.preguntas.map((pregunta) =>
          <Bloque key={pregunta.texto} pregunta={pregunta.texto}/>
        )
        return( 
        <div style={estiloCaja}>
            {bloques}
            <Formulario addForm={this.addForm}/>
        </div>
        );
    }
}

export default Caja