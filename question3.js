import React from 'react';

const Question3=()=>{

    const number=[0,1,2,3,3,4,5,6,7,7,8,9,10,10];

    const repetedNumber=()=>
    {
        let result=[];
        for(let i=0;i<number.length;i++)
        {
            if(number[i+1]===number[i])
            {
                result.push(number[i]);
            }
        }
        document.getElementById("output").innerHTML=result;
    }

    return(
        <div className="container">
            <div className="row text-center">
                <div className="col-lg-12">
                    <h3>Question3- Find repeated number</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-6">
                     <p>Array Elements:-</p>
                        {
                            number.map((xitem,index)=>{
                                return(
                                    <p key={index}>{xitem}</p>
                                )
                            })
                        }
                    
                </div>
                <div className="col-lg-4">
                  <button className="btn btn-primary" onClick={repetedNumber}>Repeted Elements</button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h4>Output:</h4>
                    <h4 id="output"></h4>
                </div>
            </div>

        </div>
    )

}

export default Question3;