import React from 'react';

const Question5 = () => {
    const user = [
        { id: "4", name: "abc" },
        { id: "10", name: "ab2" },
        { id: "5", name: "abc3" },
        { id: "6", name: "abc5" },
    ]
   let sorted;
    const sortElement=()=>
    {   
        sorted = JSON.stringify(user.sort((a, b) => a.id - b.id))
      document.getElementById("output").innerHTML= sorted;
    }

    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-lg-12">
                    <h3>Question5- Sort Object by Id</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-6">
                    <p>Object Elements:-</p>

                    <table className="table table-bordered text-center">
                        <thead className="bg-primary">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((xitem, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{xitem.id}</td>
                                            <td>{xitem.name}</td>
                                        </tr> 
                                    )
                            })
                            }
                        </tbody>
                    </table>
                        



            </div>
                <div className="col-lg-4">
                    <button className="btn btn-primary" onClick={sortElement}>Sort Here</button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2 text-center">
                    <h4>Output:</h4>
                    <h4 id="output"></h4>
                </div>
            </div>

        </div>
    )
}

export default Question5;