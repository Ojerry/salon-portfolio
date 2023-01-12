import { useState } from "react"
import React from 'react'
import axios from 'axios'
import testImg from '../../assets/images/myLogo1.png'
import { Navigate } from'react-router-dom';
import {UserAuthState} from './../../context/UserAuthContext'
import takePhoto from './../../assets/images/takePhoto.png';

const AddProduct = () => {
    const [image, setImage] = useState(null);
    const {user, dispatch} = UserAuthState()
    const id = localStorage.getItem('user_id')
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState("")
    const [uploaded, setUploaded] = useState(false)

    const add = (e) =>{
        e.preventDefault();
        console.log(name, desc)
        var formData = new FormData()
        formData.append('file', image)
        formData.append('_id', id)
        formData.append('name', name)
        formData.append('desc', desc)
        formData.append('price', price)
        axios.post('/mysalon/api/user/addUserProducts', formData).then(res=>{
            // console.log(res)
            setUploaded(true)
        }).catch(function(error){
            if(error.response.status === 401){
                console.log("error")
            }
        })
    }
    const addMore = () => {
        setName("")
        setDesc("")
        setPrice(null)
        setUploaded(false)
        setImage(null)
    }
    // console.log(id)
    if(!id){
        return <Navigate to={'/login'}  replace />;
    }

  return (
    <div className='my-9 flex flex-col justify-center items-center'>
        <div className="text-center font-bold text-2xl">
            <h2>Add Product</h2>
        </div>
        {uploaded ? <div className="mt-9 bg-lime-300 w-52 text-center h-12">
        <p>File Uploaded</p>
        <p onClick={addMore}>Click to Add more...?</p>
        </div> : null }

        <form onSubmit={add} className="mt-8 space-y-6" action="#" method="POST">
        <div class="form-group mb-6">
            <input type="text" class="form-control block
                w-80
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Name" name="name" onChange={e => setName(e.target.value)} />
            </div>
        <div class="form-group mb-6">
            <input type="number" class="form-control block
                w-80
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Price" name="price" onChange={e => setPrice(e.target.value)} />
            </div>
            <div className="text-center w-80">
                <label>
                    <div><img class="upload-image" src={takePhoto} alt="Upload"/></div>
                    <input
                    className="hidden"
                        onChange={e => setImage(e.target.files[0])}
                        name="file" type="file" required/>
                </label>
                {image ? <div className="w-50 border-y-2 border-lime-400"></div>: <div className="w-50 border-y-4"></div>}
                
                
            </div>
            <textarea className="form-control
                                    block
                                    w-80
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                     name="desc" type="text" placeholder="description" onChange={e => setDesc(e.target.value)} />
            <button className="w-1/2 px-6 py-2.5 bg-orange-600 text-white rounded shadow-md hover:bg-orange-400 active:bg-orange-300">Add</button>
        </form>
    </div>
  )
}

export default AddProduct