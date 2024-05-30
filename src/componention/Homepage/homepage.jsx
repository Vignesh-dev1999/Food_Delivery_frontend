import { Link } from 'react-router-dom';
import './homepage.scss'
import Navbar from '../navbar/navbar';
import Hero from '../hero/hero';

// import Profile from '../profile/profile';
// import Setting from '../settings/setting';
// import Address from '../address/address';
// import Editprofile from '../editprofile/editprofile';
import Category from '../categorypage/catehome';
import Mind from '../foodlistpage/foodlisth';
import Footer from '../footerhomepage/footerhome';
// import Kfc from '../kfclist/kfc'
// import Cart from '../cart/cart';
// import SellerLayout from '../sellerLayout/SellerLayout';
// import Addrestaurant from '../sellerrestaurant/addrestaurant';
// import Sellerlogin from '../sellerlogin/sellogin'
// import Sellersignup from '../sellersignup/selsignupp'

function Home() {

    return (
        <div className="home">
            <Hero />
            {/* <Address/> */}
            {/* <Setting/> */}

            {/* <Editprofile/> */}

            <Mind />
            <Category />

            <Footer />
            {/* <Kfc/>  */}
            {/* <SellerLayout /> */}
            {/* <Addrestaurant/>
            < Sellerlogin />

            <Sellersignup/> */}



        </div>

    )
}

export default Home;