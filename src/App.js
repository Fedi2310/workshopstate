
import React from 'react';
import './App.css';

class App extends React.Component{
  
    constructor(){
      super ()
      this.state={
        tasks : [

        ],
        textLive : ""

      }
    }
      addTask=()=> this.state.textLive !== ""  &&  this.setState({tasks : [...this.state.tasks,{title : this.state.textLive,isDone : false , id : Math.random()}], textLive :""})
      deleteTask=(a)=> this.setState({tasks : this.state.tasks.filter((el,i,t)=> el.id !== a)})
      switchDone=(a)=> this.setState({tasks : this.state.tasks.map((el,i,t)=> el.id===a ? {...el,isDone : true}:el)})

  render() {
    return(
      <div className='samir'>
        <h1>
          Todo List
        </h1>
        {
          this.state.tasks.map((task,i,t)=>
          <div className='fedi'>
            <h3 className={task.isDone && "moez"}>
              {task.title}
            </h3>
            <h4>{task.isDone ? "true" : "false" }</h4>
            <button onClick={()=>this.switchDone(task.id)}>Done</button>
            <button onClick={()=>this.deleteTask(task.id)}>Delete</button>
          </div>
            )
        }
        <br/>
        <div>
        <input value={this.state.textLive} type='text' onChange={(e)=>this.setState({textLive: e.target.value})}/>
        <button onClick={this.addTask}>add</button>
        </div>
      </div>
    )
  }
}

export default App;
