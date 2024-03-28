import { useState } from 'react';
import './add_product.scss'

import axios  from 'axios';


function Seller(){

    const[productlist, setproduct]=useState({
        restarentname:"",
        productname:"",
        productid:"",
        productdetails:"",
        productprice:"",
        productstack:""
    })

    const handleChange =(e)=>{
        // console.log(productlist);
        const{value, name} =e.target
        setproduct({...productlist,[name]:value})
    }
    const handlesubmit=async()=>{
        console.log(productlist);

        const response =await axios.post("http://localhost:3001/p", productlist)
        console.log(response.data)


        if(response.status === 200){
            alert("sucess")
        }
    }
    
    return(
        <div className="seller">
       <div className="out">
        <h3>ADD PRODUCT</h3>

        <div className="in">
            <div className="rname">
                <label>Restarent Name : </label>
                <input type="name" id='rn' name="restarentname" onChange={handleChange}></input>
            </div>
            <div className="pname">
                <label>Product Name : </label>
                <input type="pmane" id='pn' name="productname" onChange={handleChange}></input>
            </div>
            <div className="id">
                <label>Product id : </label>
                <input type="name" id='pid' name='productid' onChange={handleChange}></input>
            </div>
            <div className="pdetails">
                <label>Product Details : </label>
                <input type="name" id='pd' name='productdetails' onChange={handleChange}></input>
            </div>
            <div className="Price">
                <label>Product Price : </label>
                <input type="number" id='pr' name='productprice' onChange={handleChange}></input>
            </div>
            <div className="stack">
                <label>Product Stack : </label>
                <input type="number" id='st' name='productstack' onChange={handleChange}></input>
            </div>
            <div className='but'>
                <button onClick={handlesubmit}>Submit</button>
            </div>

        </div>
       </div>

        </div>
    )
}
export default Seller;