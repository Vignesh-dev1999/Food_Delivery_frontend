import Seller from '../sellerpage/add_product'
import View from '../sellerviewproduct/sellerview';
import SELLERPRO from '../sellerprofile/sellerpro';
import { Outlet } from 'react-router-dom';


function SellerLayout() {
    return (
        <div className="sellerLayout">

            <SELLERPRO />
            <Outlet/>
        </div>
    )
}

export default SellerLayout;