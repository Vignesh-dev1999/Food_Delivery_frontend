
import "./kfc.scss"
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom"
import img from "../../images/kfclist.avif"
import burger from "../../images/listbur.avif"

const kfc = [
    {
        name: "Green Pitch Veg Meal",
        price: "499",
        image: img,
        data: "Veg Lovers now save Rs. 252 on Veg meal of 2 Veg Zinger Burgers, 2 Veg Longers, Large Fries and a Pepsi PET 475ml [Serves 2-3]"

    },
    {
        name: "Veg Zinger Burger with Cheese",
        price: "₹213",
        image: burger,
        data: "Signature veg burger with crispy patties, cheese slice, veggies & a tangy sauce"
    },
    {
        name: "Veg Zinger Burger",
        price: "₹188",
        image: burger,
        data: "Signature veg burger with crispy patties, veggies & a tangy sauce"
    },
    {
        name: "2 X Veg Krisper Burgers",
        price: "₹179",
        image: burger,
        data: "2 delicious veg value burgers - at a deal price"
    }


]
function Kfc() {
    return (
        <div className="na">

           
            <div className="d">
                <div className="a">
                    <div className="kfc">
                        <div className="left">
                            <h6>KFC</h6>
                            <p>Burgers, Biryani</p>
                        </div>
                        <div className="right">
                            <div className="st">

                                <span class="fa fa-star checked"></span>
                                <span>4.3</span>
                            </div>
                            <div className="l">

                            </div>
                            <p>10k+ratings</p>
                        </div>

                    </div>
                    <div className="line">

                    </div>
                    <div className="kfc-list">
                        <div className="kfcs">
                            <h3>Recommended</h3>
                        </div>
                        {kfc.map((data, index) => (
                            <Link to="/kfc">
                                <div className="data" key={index}>

                                    <div className="content">
                                        <div className="rating">

                                            {/* <div className="star">
                                                <span class="fa fa-star checked"></span> <span >{data.star}</span>
                                            </div> */}
                                            <h4>{data.name}</h4>
                                            <h5>{data.price}</h5>
                                            <p>{data.data}</p>

                                        </div>
                                    </div>
                                    <div className="header">
                                        {/* <img src={data.image} alt="" /> */}
                                        <button id="myImg" style={{ backgroundImage: `url(${data.image})` }}></button>
                                        <button id="addBtn">ADD</button>
                                    </div>

                                </div>
                                <div className="gap">

                                </div>
                            </Link>
                        ))}

                    </div>

                </div>
            </div>


        </div>

    )
}

export default Kfc;