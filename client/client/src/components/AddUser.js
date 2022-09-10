import React, {useState} from 'react';
import axios from "axios";

function AddUser() {
    const [username,setUsername] =  useState("");
    function handleUsername(e){
        setUsername(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        const user ={username,};
        console.log(user);
        axios.post("http://localhost:5000/users/add",user)
        .then((res)=>(console.log(res.data)));
        setUsername("");
    }

  return (
    <>
        <div className = "container">
            <div className = "card border-0 shadow my-4">
                <div className="card-body p-3">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group" style = {{marginLeft:"20px", marginBottom:"15px",marginRight:"20px",}}>
                                <label>👤 Username</label>
                                <input type = "text" required className = "form-control" value = {username} onChange = {handleUsername}/>
                            </div>
                            <div className="form-group" style = {{textAlign:"center",}}>
                                <input type = "submit" value = "Create User" className = "btn " style = {{color : "white", marginBottom:"25px", backgroundColor: "#50C878"}}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default AddUser;