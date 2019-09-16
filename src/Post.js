import React, { Component } from 'react'

export default class Post extends Component {
   state={
        posts:[]
   } 
    
  async componentDidMount(){
     const  ruta= await fetch('https://jsonplaceholder.typicode.com/posts')
    const resp= await ruta.json();
    this.setState({posts:resp});
    console.log(resp)
    /*
    .then((response)=>{return response.json()})
    .then((response)=>console.log(response))
    */
}
    render() {
        return (
            //<React.Fragment>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>userId</td>
                            <td>Title</td>
                            <td>Body</td>
                            
                        </tr>
                    </thead>
                <tbody> 

                {
                    this.state.posts.map((item)=><tr key={item.id}>
                        <td>{item.userId}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>)    
                }
                </tbody>
                </table>
            //</React.Fragment>
        )
    }
}
