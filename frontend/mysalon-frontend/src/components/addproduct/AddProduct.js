import { useState } from "react"
import React from 'react'
import axios from 'axios'
import testImg from '../../assets/images/myLogo1.png'

const AddProduct = () => {
    const [image, setImage] = useState(null);
    

    const add = (e) =>{
        e.preventDefault();
        var formData = new FormData()
        formData.append('file', image)
        formData.append('_id', "63bc803d4f8b230708021602")
        axios.post('/mysalon/api/user/addUserProducts', formData).then(res=>{
            // console.log(res)
        }).catch(function(error){
            if(error.response.status === 401){
                console.log("error")
            }
        })
    }

  return (
    <div className='min-h-screen'>
        <form onSubmit={add} className="mt-8 space-y-6" action="#" method="POST">
            <input
                onChange={e => setImage(e.target.files[0])}
                name="file" type="file"/>
            <input className="border border-gray-300" name="id" type="text"/>
            <button className="border border-gray-300">Submitt</button>
        </form>
    </div>
  )
}

export default AddProduct