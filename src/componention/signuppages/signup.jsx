
import "./signup.scss"
import { Link, json, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Navbar from "../navbar/navbar";
function Signup() {
    const navigate = useNavigate()
    const [userDetails, setUserDetails]=useState({
        name:"",
        email:"",
        password:"",
        address:"",
        phonenumber:""
    })

    const handleChange =(e)=>{
        console.log(userDetails);
        const {value, name} =e.target
        setUserDetails({...userDetails, [name]:value})
    }

    const handleSubmit =async() =>{
        console.log(userDetails);
        // fetch("http://localhost:3000/",{
        //     method:"POST",
        //     Headers:{
        //         "content- Type": "application/json",
        //     },
        //     body: json.stringify(signup)
        // })

        const response = await axios.post("http://localhost:3001/", userDetails)
        console.log(response)

        if(response.status === 200){
                navigate("/login")
        }

    }

 




    return (
        <div className="n">
        <div className="signup">
            
            <div className="border">
                <h5>SIGN UP</h5>

                <div className="names">
                    <label>Name: </label>
                    <input type="text" id="name" name="name" onChange={handleChange} />
                </div>

                <div className="Email">
                    <label>Email: </label>
                    <input type="email" id="email" name="email" onChange={handleChange} />
                </div>

                <div className="password">
                    <label>Password: </label>
                    <input type="password" id="password" name="password" onChange={handleChange}/>
                </div>

                <div className="address">
                    <label>Address: </label>
                    <input type="address" id="address" name="address" onChange={handleChange}/>
                </div>

                <div className="phonenum">
                    <label>Phonenumber: </label>
                    <input type="number" id="phonenum" name="phonenumber" onChange={handleChange} />
                </div>

                {/* <div className="gender">
                    <label>Gender: </label>
                    <input type="radio" id="radio" /><span>Male</span>
                    <input type="radio" id="radio" /><span>Female</span>
                </div> */}

               




                <div className="submit">
                    <Link to="/login">

                    <button onClick={handleSubmit}>Sign in </button>
                    </Link>
                    <Link to='/login' className="link"><button >Log in  </button></Link>
                </div>



            </div>



        </div>
        </div>
    )
}

export default Signup;