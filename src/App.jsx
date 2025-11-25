import React, { useState } from 'react'

const App = () => {
let[fullName, setfullName] = useState("");
let[nameErr, setnameErr] = useState("");
let[email, setemail] = useState("");
let[emailErr, setemailErr] = useState("");
let[password, setpassword] = useState("");
let[passwordErr, setpasswordErr] = useState("");
// let[passwordStrong, setpasswordStrong] = useState(""); 




const fullNameHandle = (e)=> {
  setfullName(e.target.value);
  setnameErr("");
}
const emailHandle = (e)=> {
  setemail(e.target.value);
  setemailErr("");
  
}
const passwordHandle = (e)=> {
  setpassword(e.target.value);
  // passwordStrong(e.target.value);
  setpasswordErr("")
  
}
const passCheeck =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const clickHandle = () => {
    if(!fullName){
       setnameErr("full name is required");
    }
    if(!email){
     setemailErr("email is not valid");
    }
    if(!password){
      setpasswordErr("passward invalid")
    }
    if(!passCheeck.test(password)){
      setpasswordErr("password week")
    }
    // else{
    //   setpasswordStrong("password strong")
    // }
    
}
  return (
    <div className='flex flex-col border-3 border-green-800 p-5 w-xl m-auto rounded-2xl mt-17'>
      <input onChange={fullNameHandle} type="text" placeholder='Full Name'/>
      {nameErr && <p>{nameErr}</p>}
      <input onChange={emailHandle} type="email" placeholder='Email'/>
      {emailErr && <p>{emailErr}</p>}
      <input onChange={passwordHandle} type="password" placeholder='Password'/>
      {passwordErr && <p>{passwordErr}</p>}
      <button onClick={clickHandle}>Sign in</button>
    </div>
  )
}

export default App
