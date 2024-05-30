
import "./signup.scss"
import { Link, json, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../navbar/navbar";
// import { Object } from "joi";
function Signup() {
    const navigate = useNavigate()
    const initialValues = {
        name: "",
        email: "",
        password: "",
        address: "",
        phonenumber: ""
    }
    
    const [userDetails, setUserDetails] = useState(initialValues)
    const [userErrors, setUserErrors] = useState(initialValues);

    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        console.log(userDetails);
        const { value, name } = e.target
        setUserDetails({ ...userDetails, [name]: value })
    }
    useEffect(() => {
        if (Object.keys(userErrors).length === 0 && isSubmit) {
        }
    }, [userErrors])

    const handleSubmit = async () => {
        const validate = (values) => {
            const errors = {};
            const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
            // console.log(values.name);
            if (!values.name) {
                errors.name = "Name is required!";
            }
            if (!values.email) {
                errors.email = "Email is required!";
            }
            if (!values.password) {
                errors.password = "Password is required!";
            }
            return errors
        }
        setUserErrors(validate(userDetails));
        setIsSubmit(true)
        console.log(userErrors);
        if (Object.keys(userErrors).length === 0 && userErrors.constructor === Object) {
            console.log(Object.keys(userErrors).length === 0 && userErrors.constructor === Object);
            console.log();
            console.log(userDetails);
            // const response = await axios.post("http://localhost:5000/user/register", userDetails)
            // console.log(response)

            // if (response.status === 200) {
            //     navigate("/login")
            // }
        }
    }

    return (
        <div className="n">
            <div className="signup">

                <div onSubmit={handleSubmit} className="border">
                    <h5>SIGN UP</h5>
                    <div className="names">
                        <label>Name: </label>
                        <input type="text" id="name" name="name" value={userDetails.name} onChange={handleChange} />
                    </div>
                    <p>{userErrors.name}</p>
                    <div className="Email">
                        <label>Email: </label>
                        <input type="email" id="email" name="email" value={userDetails.email} onChange={handleChange} />
                    </div>
                    <p>{userErrors.email}</p>
                    <div className="password">
                        <label>Password: </label>
                        <input type="password" id="password" name="password" value={userDetails.password} onChange={handleChange} />
                    </div>

                    <div className="address">
                        <label>Address: </label>
                        <input type="address" id="address" name="address" value={userDetails.address} onChange={handleChange} />
                    </div>

                    <div className="phonenum">
                        <label>Phonenumber: </label>
                        <input type="number" id="phonenum" name="phonenumber" value={userDetails.phonenumber} onChange={handleChange} />
                    </div>

                    <div className="gender">
                        <label>Gender: </label>
                        <input type="radio" id="radio" /><span>Male</span>
                        <input type="radio" id="radio" /><span>Female</span>
                    </div>
                    <div className="submit">
                        <button onClick={handleSubmit}>Sign in </button>
                        <Link to='/login' className="link"><button >Log in  </button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;