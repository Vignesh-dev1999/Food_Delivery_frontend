import { useState } from 'react';
import './add_product.scss'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Seller() {
    const navigate = useNavigate()
    const [productlist, setproduct] = useState({
        restarentname: "",
        productname: "",
        productid: "",
        productdetails: "",
        productprice: "",
        productstack: ""
    })

    const handleChange = (e) => {
        // console.log(productlist);
        const { value, name } = e.target
        setproduct({ ...productlist, [name]: value })
    }
    const handlesubmit = async () => {
        console.log(productlist);

        const response = await axios.post("http://localhost:3001/p", productlist)
        console.log(response.data)


        if (response.status === 200) {
            navigate("/seller/viewAllProducts")
        }
    }
    const [imageSrc, setImageSrc] = useState('');
    const uploadImage = (e) => {
        console.log(e.target.files);
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // When the reader has finished reading the file, set the image source to the Base64 string
                setImageSrc(reader.result);
            };
            reader.readAsDataURL(file); // Read the file as a Data URL (Base64-encoded string)
        }
convertImageToBase64(file)

    }
    function convertImageToBase64(file, callback) {
        // console.log('hello ,'+ file);
        // callback();
        const reader = new FileReader();

        reader.onloadend = function () {
            // Convert the image to Base64 string
            const base64String = reader.result;
            let image_str = toString(base64String);
            console.log(image_str);
            // callback(base64String);
        };

        reader.readAsDataURL(file);
    }


    return (
        <div className="seller">
            <div className="out">
                <h3>ADD PRODUCT</h3>

                <div className="in">
                    <div className="rname">
                        <label>Restaurant Name : </label>
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
                    <input type='file' onChange={uploadImage} />
                    {imageSrc && (
                        <div>
                            <h3>Preview:</h3>
                            <img src={imageSrc} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                        </div>
                    )}
                    <div className='but'>
                        <button onClick={handlesubmit}>Submit</button>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Seller;