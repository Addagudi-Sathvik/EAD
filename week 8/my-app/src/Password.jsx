import React,{useState} from 'react';
 
const Password = () =>{
    const [password , setPassword] = useState("");

    const getStrength = (pwd) =>{
        if(!pwd) return "";
        if(pwd.length <6) return "Weak password";
        if(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(pwd)) return "Strong Password";
        return 'Moderate Pasword'
    };

    const handleChange = (event) => {
        setPassword(event.target.value);
    }
    return(
        <div className='container'>
            <center>
                <h1>Password Strength Checker</h1>
                <input type="password" placeholder='ENTER YOUR PASSWORD' onChange={handleChange}/>
                <h3>{getStrength(password)}</h3>
            </center>
        </div>
    );

}



export default Password;