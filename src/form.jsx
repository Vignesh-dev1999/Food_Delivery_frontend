import { useState } from "react"

export const Form =() =>{
    const[signup, setSignup] = useState({
        userName:"",
        email:"",
        password:"",
        number:""
    })

    const handlechange =(e) =>{
        console.log(signup);
        const{value, name} = e.target 
        setSignup({...signup, [name]:value})
    }

    const handlesubmit =() => {
        console.log(signup);
    }
    // const [userName, setUsername] = useState()
    // const [Email,setemail] = useState()
    // const [Password,setpassword] = useState()
    // const [Number,setnumber]=useState()

// const handleUserName =(e) =>{
//     e.preventDefault()
//     setUsername(e.target.value)
//     console.log(userName);
// }
// const handleemail = (m)=>{
//     m.preventDefault()
//     setemail(m.target.value)
//     console.log(Email);
// }
// const handlepassword =(p)=>{
//     p.preventDefault()
//     setpassword(p.target.value)
//     console.log(Password);
// }
// const handlenumber=(n)=>{
//     n.preventDefault()
//     setnumber(n.target.value)
//     console.log(Number);
// }
// const handlesubmit =() =>{
//     console.log({
//         username:userName,
//         email:Email,
//         password:Password,
//         number:Number

//     });
// }
return(
    <div className="form">
        <input type="text" placeholder="Username"  name="userName" onChange={handlechange} />
        <input type="text" placeholder="Email" name="email" onChange={handlechange}/>
        <input type="text" placeholder="Password" name="password" onChange={handlechange} />
        <input type="text" placeholder="Number" name="number" onChange={handlechange}/>
        <button onClick={handlesubmit}>submit</button>
    </div>
)
}

