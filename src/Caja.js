import React, {Component} from 'react'
import whatsapp from './wsp1.jpg'
import Bloque  from './Bloque'
import Formulario from './Formulario'

class Caja extends Component{
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

        return( 
        <div style={estiloCaja}>
            <Bloque/>
            <Bloque/>
            <Bloque/>
            <Bloque/>
            <Formulario/>
        </div>
        );
    }
}

export default Caja