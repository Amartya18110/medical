import React from 'react'
import axios from 'axios'

const Logout=()=> {
    
    const onSubmit = () => {
        axios.get("http://localhost:8000/admin/logout",{withCredentials:true})
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
      };
    
    return (
        <>
            <button onClick={onSubmit} >logout</button>
        </>
    )
}

export default Logout
