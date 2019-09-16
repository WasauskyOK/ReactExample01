import React from 'react';
import informacion from './some/informacion';
//import Tasks from './Tasks';
import Tercero from './Tasks';
import TaskForm from './TaskForm';
import Post from './Post';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
//import Cuarto from './Tasks';

/*
import logo from './logo.svg';
import './App.css';
*/

class Segundo extends React.Component{
  state={
      arreglo1:informacion
  }
  addTask=(nombre,duration)=>{

      const addJson={
        id:this.state.arreglo1.length,
        name:nombre,
        duration:duration
      }
      this.setState({
        arreglo1:[...this.state.arreglo1,addJson]}
        )
    console.log(`Tu nombe  : ${nombre},Duracion :
     ${duration} Longitud : ${this.state.arreglo1.length}`)
  }
  removeTask=(id)=>{
     const FiltroRemove=this.state.arreglo1.filter(e=>e.id!==id) 
      this.setState({arreglo1:FiltroRemove})
    }
  render(){
    return <div>
    <Router>
      <Link to="/">Home</Link><br/>
      <Link to='/Post'>Post</Link>  
      <Route exact path="/" render={()=>{
        return <React.Fragment>
        <TaskForm addTask={this.addTask}/>        
        <Tercero Array1={this.state.arreglo1} 
        Eliminar={this.removeTask}/>      
       
      </React.Fragment>
    }}>

    </Route>
      
      <Route  path='/Post' component={Post}>
      
      </Route>

    </Router>
    </div>
  }
}

function App() {

  return (
      <div>Hola Grupo de estudio<br/>
        <Segundo />
        
      </div>
              );
}

export default App;
