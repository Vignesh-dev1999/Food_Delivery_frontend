import './cart.scss'
import { Link } from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import imgss from "../../images/FREE_DELIVERY_POST_TEMPLATE__1_-removebg-preview.png"
import kfc from "../../images/kfcpay.avif"
import veg from "../../images/vegkfc.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useRazorpay from "react-razorpay";

function Cart() {

    const [Razorpay]=useRazorpay();

    const handlepay=()=>{
        const options = {
            key: "rzp_test_JRDQQlHCv2mRdq", 
            amount: "50000", 
            currency: "INR",
            name: "Acme Corp",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            // order_id: "order_9A33XWu170gUtm",
            handler: function (response) {
              alert(response.razorpay_payment_id);
              alert(response.razorpay_order_id);
              alert(response.razorpay_signature);
            },
            prefill: {
              name: "Piyush Garg",
              email: "youremail@example.com",
              contact: "9999999999",
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
          };
          const rzpay = new Razorpay(options);
          rzpay.open()
    }


    return (

        <div className='navbar'>
            <div className='tb'>
                <div className='lr'>


                    <div className="logo">
                        <Link to="/">

                            <img src={imgss} /> <span className='check'>SECURE CHECKOUT</span>
                        </Link>
                    </div>
                    <div className='list'>
                        <p>Help</p>
                        <Link to="/profile">
                            <AccountCircleIcon className="icon" />
                        </Link>
                    </div>
                </div>
                {/* <div className='c'>

                    <div className="cart">
                    </div>
                    <div className='text'>
                        <h4>Your cart is empty</h4>
                        <p>You can go to home page to view more restaurants</p>
                    </div>
                    <div className='gohome'>
                        <Link to="/">
                        
                        <button> SEE RESTAURANTS NEAR YOU</button>
                        </Link>
                    </div>
                </div> */}
                <div className='flex'>

                    <div className='left'>
                        <div className='heads'>

                            <div className='head'>
                                <h5>Select Delivery Address</h5>
                                <p>You have a saved address in this location</p>
                            </div>

                            <div className='lefts'>

                                <div className='left1'>
                                    <div className='lo'>

                                        <LocationOnIcon className='ico' />
                                    </div>
                                    <div className='ln'>

                                        <h5>KG isl</h5>
                                        <p>Sri Mahalakshmi Auto Spare Parts KT Complex RMTC Near Depo Oddanchatram </p>
                                    </div>

                                </div>
                                <div className='left2'>
                                    <div className='lo2'>
                                        <LocationOnIcon className='ic' />
                                    </div>
                                    <div className='ln2'>

                                        <h5>Add New Address</h5>
                                        <button>Add Address</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='payments'>
                            <p>Payment</p>
                        </div>

                    </div>

                    <div className='rights'>
                        <div className='right'>
                            <img src={kfc} /> <span className='names'>KFC <span></span></span>
                        </div>
                        <div className='right1'>
                            <img src={veg} />
                            <p>Veg Zinger Burger with Cheese</p>
                            <div className='inde'>

                                <div className='le'>
                                    <p>-</p>
                                </div>
                                <div className='mid'>
                                    <p>1</p>
                                </div>
                                <div className='re'>
                                    <p>+</p>
                                </div>
                                <div className='amt'>
                                    <p>₹213</p>
                                </div>
                            </div>
                        </div>
                        <div className='right2'>
                            <p>Bill Details</p>
                        </div>
                        <div className='item'>
                            <p>item Total </p>
                            <p>₹213</p>
                        </div>
                        <div className='fee'>
                            <p>Delivery partner fee</p>
                            <p>₹70</p>
                        </div>
                        <div className='line'>

                        </div>
                        <div className='tip'>
                            <p>Delivery Tip</p>
                            <p>Add Tip</p>
                        </div>
                        <div className='platfee'>
                            <p>Platform fee</p>
                            <p>₹4</p>
                        </div>
                        <div className='gst'>
                            <p>GST and Restaurant Charges</p>
                            <p>₹50.25</p>
                        </div>
                        <div className='line2'>

                        </div>
                        <div className='pay'>
                            <h5>TO PAY</h5>
                            <h5>₹338</h5>
                        </div>
                        <div className='paynow'>
                            <button onClick={handlepay}>PAY NOW</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>



    )
}
export default Cart;