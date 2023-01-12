import { FaCartPlus } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import React from 'react'
import Modal from "react-modal";

import productImage from '../../assets/images/cottonbro.jpg'


const customStyles = {
  content: {
     top: "20%",
    height:"",
    width:"60vw",
    margin:"auto"
  },
};
const ShopItem = ({ filename, image, id, company, name, price, onClick, desc, starred, location, city, businessName, phone}) => {
  const navigate = useNavigate()
  
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault()
    // navigate(`/products/${id}`)
    console.log("clicked")
    openModal()
  }
  
  let subtitle;
  //  const [modalIsOpen, setIsOpen] = React.useState(true);
   function openModal() {
      //This function tell what should do when clicked open
      setIsOpen(true);
      console.log("clicked")
   }

   function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = "#f00";
   }
   function closeModal() {
      //This function tell what should do when clicked close
      setIsOpen(false);
   }
  starred = true
  return (
    < >
      <a onClick={handleClick} href={`/products/${id}`} className=' bg-red relative lg:w-3/12 md:w-4/12 sm:w-6/12 w-full mb-10'>
        <div className="mx-4 bg-[#faf6f4] rounded-lg overflow-hidden cursor-pointer">
          <img className='object-cover w-full h-[230px] max-w-full' src={`http://localhost:8080/file/${filename}`} alt="shop1" />
          <div className='p-3'>
            <p className="text-xs capitalize">{company}</p>
            <h3 className="text-lg font-semibold capitalize">{name}</h3>
            <div className="flex justify-between items-center mt-3">
              <p className='text-gray-600 text-base'>N{price}</p>
              {starred ? (
                <button onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                }} className='bg-[#615e5c] text-white rounded-full w-10 h-10 flex justify-center items-center'>
                  <AiFillStar size={16} />
                </button>
              ) : (
                <button onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  onClick()
                }} className='bg-[#f7f7f7] text-white rounded-full w-10 h-10 flex justify-center items-center'>
                  <AiOutlineStar size={16} />
                </button>
              )}

            </div>
          </div>
        </div>
      </a>

      <div>
        <Modal
            isOpen={modalIsOpen} //if modal is open
            onAfterOpen={afterOpenModal} //what to do after modal open
            onRequestClose={closeModal} //what to do after modal close
            style={customStyles}
            contentLabel="Example Modal">
            <div className='flex justify-center' >
            <img src={`http://localhost:8080/file/${filename}`} alt="" style={{"max-width": "20%", "max-height":"20%"}} />
            </div>
            
            <h2 className='text-center'>{name}</h2>
            
            <div className='mb-3 m-auto bg-slate-100 p-4 w-1/2'>
            <p className='pb-3'><span>Description: {desc}</span></p>
            <p className='pb-3'><span>Location: {location}</span></p>
            <p className='pb-3'><span>Cost: {price} Naira</span></p>
            </div>
            <button className='flex m-auto pt-2 px-4 text-white rounded bg-orange-600' onClick={closeModal}>close</button>
        </Modal>
    </div>
    </>
  )
}

export default ShopItem