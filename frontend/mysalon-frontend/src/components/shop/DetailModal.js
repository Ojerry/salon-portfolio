import React from 'react'
import Modal from "react-modal";
import productImage from '../../assets/images/cottonbro.jpg'

const DetailModal = ({modalIsOpen, setIsOpen}) => {
  const customStyles = {
    content: {
       top: "20%",
      //  left: "50%",
      //  right: "auto",
      //  bottom: "auto",
      //  marginRight: "-50%",
      //  transform: "translate(-50%, -50%)",
      height:"",
      width:"60vw",
      margin:"auto"
    },
 };
 let subtitle;
  //  const [modalIsOpen, setIsOpen] = React.useState(true);
   function openModal() {
      //This function tell what should do when clicked open
      setIsOpen(true);
   }

   function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = "#f00";
   }
   function closeModal() {
      //This function tell what should do when clicked close
      setIsOpen(false);
   }

   return (
      <div>
         <button onClick={openModal}>Open Modal</button>
         <Modal
            isOpen={modalIsOpen} //if modal is open
            onAfterOpen={afterOpenModal} //what to do after modal open
            onRequestClose={closeModal} //what to do after modal close
            style={customStyles}
            contentLabel="Example Modal">
            <div className='flex justify-center' >
              <img src={productImage} alt="" style={{"max-width": "20%", "max-height":"20%"}} />
            </div>
            
            <h2 className='text-center'>Wavvy</h2>
            
            <div className='mb-3 m-auto bg-slate-100 p-4 w-1/2'>
              <p className='pb-3'><span>Description: </span></p>
              <p className='pb-3'><span>Location: </span></p>
              <p className='pb-3'><span>Cost: </span></p>
            </div>
            <button className='flex m-auto pt-2 px-4 text-white rounded bg-orange-600' onClick={closeModal}>close</button>
         </Modal>
      </div>
   );
}

export default DetailModal