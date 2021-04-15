import React from 'react';

const Question2 = () => {

    const number=[0,0,1,1,0,0,0,1,0,0,1,1,1,0];

    const MaxConsecutive=()=>
    {
        let maxcount=0;
        let count=0;
        for(const i in number)
        {
            count=number[i]===1? count+1 : 0;
            if(count>maxcount)
            {
                maxcount=count;
            }
        }

        document.getElementById("output").innerHTML=maxcount;
    }
   
    
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-lg-12">
                    <h3>Question2- maximum consecutive 1's</h3>
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
                  <button className="btn btn-primary" onClick={MaxConsecutive}>maximum consecutive 1's</button>
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

export default Question2;