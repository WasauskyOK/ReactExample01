//import React from 'react';

import React,{Component}from 'react';
import Tasks2 from './Tasks2';
import PropTypes  from 'prop-types';
//import PropTypes  from 'prop-types';
//import { RSA_NO_PADDING } from 'constants';
//import Tasks2 from './Tasks2';
//import { EEXIST } from 'constants';
export default class Tercero extends Component{
    /*
    state={
        dato:'',
        textarea:''
    }
    
    KeyLogger=(e)=>{
        this.setState({[e.target.name]:e.target.value}) 
        console.log(`${e.target.name}  ${e.target.value}`);       
    }
    */
    
    render(){
        
        const color = {background:'red'};

           return <div>
            
                        
            <table className="table table-bordered table-striped">
                      <thead className="table-dark">
                     <tr>
                        
                        <th style={color}>Name</th>
                        <th>duration</th> 
                        <th>Eliminar</th>    
                    </tr>
                    </thead>
                    <tbody> 
                      {
                          
                         this.props.Array1.map((e)=>
                         <Tasks2
                          propiedad={e}
                           key={e.id} 
                           eliminar={this.props.Eliminar}/>)
                      }
                  </tbody>
                  </table>
                    </div>   
    }
}
Tercero.propTypes={
 Array1:PropTypes.array.isRequired   

}
//export default Tercero;
