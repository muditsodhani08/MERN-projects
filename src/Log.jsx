import React from 'react'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'

function Log(){
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate =useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/log',{email,password})
        .then(res=>{console.log(res)
            if(res.data === "Success"){
                navigate('/home')
            }
            else if(res.data === 'The password is incorrect'){
                alert('The password is incorrect')
            }
            else if(res.data ==='No record existed'){
                alert('No such user record exsists')
            }
            
        })
        .catch(err=>alert(err))
    }

    return(
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form  onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="email" placeholder="Enter your email" autoComplete="off" name="email"className="form-control rounded-0"
                         onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input type="password" placeholder="Enter password" autoComplete="off" name="password" className="form-control rounded-0"
                        onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
                </form>
            </div>
        </div>
    )
}
export default Log;