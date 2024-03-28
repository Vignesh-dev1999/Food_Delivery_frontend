
import Orders from '../orders/orders';
// import Address from "../address/address"
// import Setting from "../settings/setting"
// import Favourite from "../favourites/favourit"
import React, { useState } from "react"
import { useDisclosure } from "@chakra-ui/react"
import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react"

import "./profile.scss"
import Navbar from '../navbar/navbar';
import { Link, Outlet } from 'react-router-dom';

function Profile() {
    const [userdetiles, setuserdetiles] = useState({ num: 1234567890 })
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [editNumber, setSeditNumber] = useState(true)
    const handleClick = () => {
        onOpen()
    }

    const handleEdit = () => {
        setSeditNumber(!editNumber)
    }

    const handleChange = (e) => {
        setuserdetiles({ ...userdetiles, num: e.target.value })
    }
    return (
        <div className="profile">
            <div className="my-profile">

                <div className="account">
                    <div className="details">
                        <h1>Vickappu</h1>
                        <p>1234567890 . 1234567890@gmail.com</p>
                    </div>
                    <button onClick={() => handleClick("md")}>EDIT PROFILE</button>
                    <Drawer onClose={onClose} isOpen={isOpen} size="md">
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Edit Profile</DrawerHeader>
                            <DrawerBody className='aa'>
                                <div className='edit'>
                                    <div className="boxes">
                                        <div className="title">
                                            <h4>Phone Number</h4>
                                        </div>
                                        <div className="input">
                                            {editNumber ? <div className="feilds">
                                                <p>{userdetiles.num}</p>
                                                <span onClick={handleEdit}>CHANGE</span>
                                            </div>
                                                :
                                                <div className="newFeild">
                                                    <div className="feild">
                                                        <p>New phone number</p>
                                                        <input type="number" autoFocus value={userdetiles.num} onChange={handleChange} />
                                                    </div>
                                                    <button >VERIFY</button>
                                                </div>}
                                        </div>
                                        <div className="hr"></div>
                                        <div className="title">
                                            <h4>Email Id</h4>
                                        </div>
                                        <div className="input">
                                            <div className="feilds">
                                                <p>1234567890@gmail.com</p>
                                                <span>CHANGE</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </div>
                <div className="links">
                    <div className="left">
                        <Link to="/profile" >
                            <p className="active">Orders</p>
                        </Link>
                        <Link to="favourites" >

                            <p>Favourites</p>
                        </Link>
                        <Link to="payment">

                            <p>Payments</p>
                        </Link>
                        <Link to="address" >

                            <p>Addresses</p>
                        </Link>
                        <Link to="settings" >

                            <p>Settings</p>
                        </Link>
                    </div>
                    <div className="right">
                        <Outlet />

                    </div>
                </div>
            </div>
        </div>

    )
}
export default Profile