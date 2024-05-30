import { useState } from "react";
import "./login.scss"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import Navbar from "../navbar/navbar";

function Login() {
    const navigate = useNavigate()
    const [userDatails, setSignup]=useState({
        Email:"",
        Password:""
    })

    const handleChange = (e)=>{
        const {value, name} =e.target
        setSignup({...userDatails,[name]:value})
    }




    const handleSubmit = async() =>{
        console.log(userDatails);
        // fetch("",{
        //     method:"POST",
        //     Headers:{
        //         "content- Type": "application/json",
        //     },
        //     body: json.stringify(signup)
        // }).then(data => data.json())
        // .then(re=>console.log(re))

        const response = await axios.post("http://localhost:5000/user/login", userDatails)
        console.log(response)
      
            if(response.data.result === "success"){
                if(response.data.role === "user"){
                    navigate("/")
                }else{
                    alert("err")
                }
            }
            

        
    }
    return(
            <div className="na">
        <div className="login">
            <div className="borders">
                <h5>LOG IN</h5>

                <div className="Name">
                    <label>Username : </label>
                    <input type="email" id="em" name="email" onChange={handleChange}/>
                </div>
                <div className="password">
                    <label>Password : </label>
                    <input type="password" id="pass" name="password" onChange={handleChange}/>
                </div>
                <div className="submits">
                    {/* <Link to="/"> */}
                    <button onClick={handleSubmit}>Log in</button>
                    {/* </Link> */}
                   <Link to ='/register'><button>Sign up</button></Link>
                </div>
            </div>
        </div>
            </div>
    )
}

export default Login;