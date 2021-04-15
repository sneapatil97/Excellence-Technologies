import React, { Component } from 'react';

class Todo extends Component
{
    constructor()
    {
        super();
        this.state={
            todolist:["Do Assignment"],
            newtodo:''
        }
    }

    processTask=(obj)=>
    {
        this.setState({
            newtodo:obj.target.value
        })
    }

    saveTask=()=>
    {
        this.setState({
            todolist:this.state.todolist.concat(this.state.newtodo),
            newtodo:''
        })
    }

    deleteTask=(index)=>
    {
        this.state.todolist.splice(index,1);
        this.setState({
            todolist:this.state.todolist
        })
    }

    render()
    {
        return(
            <div className="container">
                <div className="row text-center mt-3">
                    <div className="col-lg-12">
                        <h4 className="text-danger font-weight-bold">To-Do List</h4>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 form-group">
                        <input type="text" 
                                className="form-control"
                                onChange={this.processTask} 
                                value={this.state.newtodo}
                        />
                    </div>
                    <div className="col-lg-4">
                     <button className="btn btn-warning"
                              onClick={this.saveTask}>Add Task</button>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-5 border p-3">
                        <h4 className="text-center text-primary">Pending Assignment</h4>
                        <table className="table table-bordered text-center">
                            <tbody>
                            {
                                this.state.todolist.map((xtask,index)=>{
                                    return(
                                         <tr key={index}>
                                            <td>{index}</td> 
                                            <td>{xtask}</td>  
                                            <td>
                                                <button className="btn btn-danger btn-sm"
                                                        onClick={this.deleteTask.bind(this,index)}>Delete Task</button>
                                            </td>
                                         </tr> 
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        )
    }

}

export default Todo;
