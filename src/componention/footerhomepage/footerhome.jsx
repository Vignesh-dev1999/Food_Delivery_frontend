
import "./footerhome.scss"
import insta from "../../images/instagram_6422200.png"
import phone from "../../images/circle-phone_8034062.png"
import loc from "../../images/locations.png"
import imgs from "../../images/FREE_DELIVERY_POST_TEMPLATE__1_-removebg-preview.png"
function Footer() {
    return (

        <div className="footer">
            <div className="logo">
                <img src={imgs} />
                <p>© 2024 Bundl Technologies Pvt. Ltd</p>
                <div className="icon">
                    <img src={phone}/>
                    <img src ={insta}/>
                    <img src={loc}/>
                </div>
            </div>



            <div className="company">
                <h4>Company</h4>
                <p>About</p>
                <p>Careers</p>
                <p>Team</p>

            </div>
            <div className="contact">
                <h4>Contact us</h4>
                <p>Help & Support</p>
                <p>Partner with us</p>
                <p>Ride with us</p>
            </div>
            <div className="We">
                <h4>We deliver to:</h4>
                <p>Bangalore</p>
                <p>Hyderabad</p>
                <p>Delhi</p>
                <p>Pune</p>

            </div>
            <div className="le">

                <div className="Legal">
                    <h4> Legal</h4>
                    <p>Terms & Conditions</p>
                    <p>Cookie Policy</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;