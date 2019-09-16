import React ,{Component}from 'react';
import PropTypes from 'prop-types';


export default class Tasks2 extends Component{

EstiloPuntuacion(){
    return {
        color:this.props.propiedad.duration<70?'red':"blue"
    }
}
 EstiloBotonEliminar(){
        return{
                fontSize: '20px',
                color : 'white',
                background : 'steelblue',
                border : 'none',
                outline : 'none',
                'borderRadius':'8px',
                padding : '5px 15px',
                cursor:'pointer'


        }
   }
   
render(){
    const {propiedad}=this.props;
    //const Eliminada=()=>{this.props.eliminar.bind(this,propiedad.id)}
return <tr>        
            <td>{propiedad.name}</td>
            <td style={this.EstiloPuntuacion()}>{propiedad.duration}</td>
            <td><button  onClick={this.props.eliminar.bind(this,propiedad.id)} style={this.EstiloBotonEliminar()}>x</button></td>
            </tr>
}

}
Tasks2.propTypes={
    propiedad:PropTypes.object.isRequired
}
//    export default Tasks2;