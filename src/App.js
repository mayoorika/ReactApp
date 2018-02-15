import React , {Component} from 'react';
import autoBind from 'react-autobind';

export default  class App extends Component {

     constructor(){
        super();
        this.state = {
            name: 'mayoorika',
            age: 21
        }
        autoBind(this , 'updateName' , 'decrementAge' ,'incrementAge')
     }
     componentDidMount(){
         console.log('component mounted')
     }

     updateName(e){
         this.setState({
         name: e.target.value
         })
     }
     incrementAge(){
         this.setState({
             age : this.state.age + 1
         })
     }
     decrementAge(){
         this.setState({
             age : this.state.age - 1
         })
     }



    render(){
        return(
            <div>
                <h1> My Name :{this.state.name}  </h1>
                <h1> My Age :{this.state.age}  </h1>
                <input type='text' onChange={this.updateName}/>
                <button onClick={this.incrementAge}>+</button>
                <button onClick={this.decrementAge}>-</button>

            </div>
        )


    }




}