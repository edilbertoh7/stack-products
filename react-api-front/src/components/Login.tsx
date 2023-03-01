import React, { useEffect, useState } from 'react'
import axios from "axios";
import { json, NavLink } from "react-router-dom";


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);
    const [credentialsError, setCredentialsError] = useState(false);

    useEffect(() => {
        deletes();
    }, [])
    const deletes = () => {
        setTimeout(() => {
          const email:any =  document.getElementById("email");
          email.value = "";
            const password:any =document.getElementById("password");
            password.value = "";
        }, 1000);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        console.log("mail=", email);
        if ([email, password].includes('')) {
            setError(true)
            return
        }
        setError(false)

        const payload = {
            "email": email,
            "password": password
        }
        axios.post('http://localhost:8000/api/login', payload)
            .then(res => {
                console.log(res);
                console.log(res.data);
                const redirect = json(res)
                if (redirect.status === 200) {
                    sessionStorage.setItem('token', res.data.token);
                    console.log("token=", res.data.token);
                    window.location.href = '/show';
                }
                console.log("email=", email , "password=", password);
                console.log("redirect=", redirect.status);
                setCredentialsError(false)
                
            })
            .catch(err => {
                console.log(err.response.status);
                if (err.response.status === 401) {
                    setCredentialsError(true)
                }
            })
    }
    return (
        <div className='container  mb-4 '>
                <form onSubmit={handleSubmit} className=' mb-4'>

                    <h2 className='text-white'>Ingresa con tu cuenta</h2>

                    <div className="form-outline mb-4 mt-4">
                        <label className="form-label d-flex justify-content-left" >Email address</label>
                        <input onChange={(e) => setEmail(e.target.value)}
                        type="email" name="email" id="email" className="form-control" placeholder='tucorreco@gmail.com' />
                    </div>

                    <div className="form-outline mb-4 ">
                        <label className="form-label d-flex justify-content-left" >Password</label>
                        <input onChange={(e) => setPassword(e.target.value)}
                         type="password" name="password" id="password" className="form-control" placeholder='password' />
                    </div>

                    <div className='mb-4'>

                        <button type="submit" className="btn btn-primary btn-lg btn-block">Ingesar</button>
                    </div>

                </form>
        </div>
    )
}

export default Login