
import './App.css';

// import { Form } from'./componention/signuppages/form';
// import Signup from './componention/signuppages/signup';

import Login from './componention/loginpages/login';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './componention/signuppages/signup';
import Home from './componention/Homepage/homepage';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Profile from './componention/profile/profile';
import Orders from './componention/orders/orders';
import Favourite from './componention/favourites/favourit';
import Address from './componention/address/address';
import Setting from "./componention/settings/setting"
import Payment from './componention/payments/payment';
import SellerLayout from './componention/sellerLayout/SellerLayout';
import Seller from './componention/sellerpage/add_product';
import View from './componention/sellerviewproduct/sellerview';
import Cart from './componention/cart/cart';
import cartstore from './componention/redux/cartstore';
import { Provider } from 'react-redux';
import Kfc from "./componention/kfclist/kfc"
import MainLayout from './componention/layout/MainLayout';
import Addrestaurant from './componention/sellerrestaurant/addrestaurant';
import SELLERPRO from './componention/sellerprofile/sellerpro';
import Sellerlogin from './componention/sellerlogin/sellogin';
import Sellersignup from './componention/sellersignup/selsignupp';

function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "profile",
          element: <Profile />,
          children: [
            {
              path: "",
              element: <Orders />
            }, {
              path: "favourites",
              element: <Favourite />
            },
            {
              path: "address",
              element: <Address />
            },
            {
              path: "settings",
              element: <Setting />
            },
            {
              path: "payment",
              element: <Payment />
            },

          ]
        },
        {
          path: "register",
          element: <Signup />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "kfc",
          element: <Kfc />
        },
      ]
    },

    {

      path: "/cart",
      element: <Cart />

    },
    {
      path: "/sellerlogin",
      element: <Sellerlogin />
    },
    {
      path: "/sellersignup",
      element: <Sellersignup />
    },




    {
      path: "/seller",
      element: <SellerLayout />,
      children: [
        {
          path: "",
          element: <Seller />
        },
        {
          path: "viewAllProducts",
          element: <View />
        },
        {
          path: "addrestaurant",
          element: <Addrestaurant />
        }
      ]
    },

  ])
  return (
    <div className="App">
      {/* <Form /> */}
      {/* <Signup/> */}
      {/* <Login /> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/> 
        <Route path='/register' element={<Signup />}/> 
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter> */}
      <Provider store={cartstore}>
        <RouterProvider router={route} />
      </Provider>
    </div>
  );
}

export default App;
