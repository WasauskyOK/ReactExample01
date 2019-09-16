import React,{Component} from 'react';



export default class TaskForm extends Component{
        state={

        }
         nombreref=React.createRef();
        durationref=React.createRef();

        EnviarInformacion =(e)=>{
        const valornombre=this.nombreref.current.value;
        const valorduration=this.durationref.current.value;                 
        
        this.props.addTask(valornombre,valorduration)      
        

        console.log(`enviando : ${valornombre} : ${valorduration}`)   
       
         e.preventDefault();

        }
    render(){

return <form onSubmit={this.EnviarInformacion}  >
<input type="text" ref={this.nombreref}  placeholder="Ingresa un dato" name="dato"/><br/><br/>
<input type="button" value="GoAlert ! " id="GoAlert" />
<textarea placeholder="Comenta algo" ref={this.durationref} name="textarea" ></textarea>
<input type="submit"  value="Enviar valores" />
             
             
             </form>

        
    }
}

