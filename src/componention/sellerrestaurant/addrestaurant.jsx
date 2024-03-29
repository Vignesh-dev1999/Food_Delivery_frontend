import { useState } from 'react';
import './addrestaurant.scss'
import axios from 'axios';



function Addrestaurant() {

    const [restaurant, setrestaurant] = useState({
        restarentname: "",
        restarentlocation: ""
    })

    const handleChange = (e) => {
        const { value, name } = e.target
        setrestaurant({ ...restaurant, [name]: value })
    }
    const handlesubmit = async () => {
        console.log(restaurant)

        const respons =await axios.post("http://localhost:3001/r", restaurant)
        console.log(respons.data)

        if(respons.status === 200){
            alert("sucess")
        }

    }


    return (
        <div className="alls">
            <div className="ment">
                <div className='a'>

                    <h5>ADD RESTAURANT</h5>

                </div>
                <div className='min'>
                    <div className="rname">
                        <label>Restaurant Name : </label>
                        <input type="name" id='rn' name="restarentname" onChange={handleChange}></input>
                    </div>
                    <div className="pname">
                        <label>Restaurant Location: </label>
                        <input type="pmane" id='pn' name="restarentlocation" onChange={handleChange}></input>
                    </div>
                    <div className='but'>
                        <button onClick={handlesubmit}>Submit</button>
                    </div>



                </div>
            </div>

        </div>
    )
}
export default Addrestaurant;