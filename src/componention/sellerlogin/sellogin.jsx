
import { useState } from "react";
import {  Link, useNavigate } from "react-router-dom"
import axios from "axios";
import './sellogin.scss'


function Sellerlogin() {
        const navigate = useNavigate()
        const [ sellerdetails, setSignup]=useState({
            email:"",
            Password:""

        })

        const handleChange =(e)=>{
            const {value, name} =e.target 
            setSignup({...sellerdetails,[name]:value})
        }

        const handleSubmit =async()=>{
            console.log(sellerdetails)
            
            const response = await axios.post("http://localhost:5000/user/login", sellerdetails)
            console.log(response)
        
            if(response.data.result === "success"){
                if(response.data.role === "admin"){
                    navigate("/seller")
                }else{
                    alert("Your not seller")
                }
            }
        }

    return (
        

        <div className="sellerlogin">
       
            <div className="login">
                
                <div className="borders">
                    <h5>SELLER PAGE</h5>

                    <div className="Name">
                        <label>Username : </label>
                        <input type="email" id="em" name="email" onChange={handleChange} />
                    </div>
                    <div className="password">
                        <label>Password : </label>
                        <input type="password" id="pass" name="password" onChange={handleChange} />
                    </div>
                    <div className="submits">
                        {/* <Link to="/"> */}
                        <button onClick={handleSubmit}>Login</button>
                        {/* </Link> */}
                        <Link to='/sellersignup'>
                            <button>Signup</button>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
        


    )
}
export default  Sellerlogin;