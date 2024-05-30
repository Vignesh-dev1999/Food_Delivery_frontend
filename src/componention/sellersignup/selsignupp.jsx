// import { Password } from "@mui/icons-material"
import  axios from "axios";

import { useState } from "react";
import{ useNavigate} from "react-router-dom"
import "./selsignupp.scss"



function Sellersignup() {
    const navigate = useNavigate()
    const [seldetails, setseldetails] = useState({
        name: "",
        email: "",
        Password: "",
        address: "",
        phonenumber: ""
    })

    const handleChange = (e) => {
        console.log(seldetails);
        const { value, name } = e.target
        setseldetails({ ...seldetails, [name]: value })
    }
    const handleSubmit = async () => {
        console.log(seldetails)
            const response = await axios.post("http://localhost:5000/user/register",seldetails)
            console.log(response);
            if(
                response.status === 200){
                    navigate("/sellerlogin")
                }
        }

        return (
            <div className="sellersignup">
                <div className="signup">

                    <div className="border">
                        <h5>SELLER PAGE</h5>

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
                            <input type="password" id="password" name="password" onChange={handleChange} />
                        </div>

                        <div className="address">
                            <label>Address: </label>
                            <input type="address" id="address" name="address" onChange={handleChange} />
                        </div>

                        <div className="phonenum">
                            <label>Phonenumber: </label>
                            <input type="number" id="phonenum" name="phonenumber" onChange={handleChange} />
                        </div>

                    <div className="submit">
                        {/* <Link to="/sellerlogin"> */}

                        <button onClick={handleSubmit}>Sign in </button>
                        {/* </Link> */}
                        {/* <Link to='/login' className="link"> */}
                        <button >Log in  </button>
                        {/* </Link> */}
                    </div>
                    </div>



                </div>



            </div>

        )
    }

    export default Sellersignup;