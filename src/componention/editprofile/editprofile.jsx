import React from "react"
import { useDisclosure } from "@chakra-ui/react"
import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react"


export default function Editprofile() {
    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }

    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
    return (
        <div>
            {/* <div className='edit'>
                <h2>LOGO</h2>
                <div className='ad'>

                    <p>Logout</p>
                </div>
            </div> */}
            <>

                <Button
                    onClick={() => handleClick("md")}
                    m={4}
                >{`Open md Drawer`}</Button>


                <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
                        <DrawerBody>
                            <div className="edit">
                                <label>Phonenumber</label>
                                <input type="number" />
                            </div>
                            {/* <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Consequat nisl vel pretium lectus quam id. Semper quis lectus
                                nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
                                quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
                                magna eget est lorem. Erat imperdiet sed euismod nisi porta.
                                Lectus vestibulum mattis ullamcorper velit.
                            </p> */}
                        </DrawerBody>
                    </DrawerContent>
                </Drawer></>
        </div>
    )
}