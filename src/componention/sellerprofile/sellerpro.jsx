import { Link } from "react-router-dom";
import "./sellerpro.scss"

function SELLERPRO() {
    return (
        <div className="pro">
            <div className="pr">
                <Link to="/seller">
                    <p>Add Product</p>
                </Link>
                <Link to="/seller/viewAllProducts">
                    <p> View produt</p>
                </Link>
                <p>Profile</p>
            </div>
        </div>
    )
}
export default SELLERPRO;