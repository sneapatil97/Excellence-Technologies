import React, { Component } from 'react';

class Question1 extends Component
{
    constructor()
    {
        super();
        this.state={
            list:[2,5,3,8,25,6,14,7],
            even:[]
        }
    }

    PrintNumber=()=>
    {
        this.state.list.map((xitem,index)=>{
            if(xitem%2==0)
            {
               this.setState({
                   even:this.state.even.push(xitem)
               })
            }
            
        })

       document.getElementById("number").innerHTML=this.state.even;
       
    }

    render()
    {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3>Question1-Print even number</h3>
                    </div>
                </div>
                <div className="row text-center mt-4">
                    <div className="col-lg-12">
                        <p>Array Elements:-</p>
                        {
                            this.state.list.map((xitem,index)=>{
                                return(
                                    <p key={index}>{xitem}</p>
                                )
                            })
                        }

                        <button className="btn btn-primary" onClick={this.PrintNumber}>Even Number</button>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-12 text-center">
                        <h5>Even Numbers-</h5>
                        <div id="number"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Question1;