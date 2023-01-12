import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Bars } from 'react-loader-spinner'
import productImage from '../../assets/images/cottonbro.jpg'
import productImage2 from '../../assets/images/burnout.jpg'
import productImage3 from '../../assets/images/cleanfade.jpg'
import productImage4 from '../../assets/images/wavvy.jpg'
import ShopItem from './ShopItem'
import axios from 'axios'
import DetailModal from './DetailModal'
import React from 'react'
import Modal from "react-modal";

const Shop = () => {
    const defaultProduct = [
        {
            id: 1,
            name: "Round Cut",
            image: productImage,
            business_name: "Changes Salon",
            starred: true,
            desc: "fresh round cut",
            price: "500"
        },
        {
            id: 2,
            name: "High Burn",
            image: productImage2,
            business_name: "Changes Salon",
            starred: false,
            desc: "Fade with a high tint",
            price: "800"
        },
        {
            id: 3,
            name: "Clean Fade",
            image: productImage3,
            business_name: "Changes Salon",
            starred: true,
            desc: "A simple fade",
            price: "500"
        },
        {
            id: 4,
            name: "Spotty waves",
            image: productImage4,
            business_name: "Changes Salon",
            starred: true,
            desc: "Get yourself wavvy",
            price: "1000"
        },
        {
            id: 5,
            name: "Round Cut",
            image: productImage,
            business_name: "Changes Salon",
            starred: true,
            desc: "fresh round cut",
            price: "500"
        },
        {
            id: 6,
            name: "High Burn",
            image: productImage2,
            business_name: "Changes Salon",
            starred: false,
            desc: "Fade with a high tint",
            price: "800"
        },
        {
            id: 7,
            name: "Clean Fade",
            image: productImage3,
            business_name: "Changes Salon",
            starred: true,
            desc: "A simple fade",
            price: "500"
        },
        {
            id: 8,
            name: "Spotty waves",
            image: productImage4,
            business_name: "Changes Salon",
            starred: true,
            desc: "Get yourself wavvy",
            price: "1000"
        },
    ]
    const [products, setProducts] = useState(defaultProduct)
    const [loading, setLoading] = useState(false)
    const [loadedProducts, setLoadedProducts] = useState([])
    const dispatch = useDispatch()

    const createPagination = (items, limit = 8, offset = 0) => {
        let arr = []
        items.forEach((item, index) => {
          if (index >= offset && index < offset + limit) {
            arr.push(item)
          }
        })
        return arr
      }
    
      const loadMore = () => {
        if (loadedProducts.length === products.length) return
        const newProducts = createPagination(products, 8, loadedProducts.length)
        setLoadedProducts([...loadedProducts, ...newProducts])
      }

    
    const [stores, setStores] = useState([])
    const data = []
    // const [modalIsOpen, setIsOpen] = useState(false);
    // const viewDetail = () => {
    //     setIsOpen(!modalIsOpen)
    //     console.log(modalIsOpen)
    // }
    useEffect(()=>{
        axios.get('/mysalon/api/user/businesses').then((res)=>{
            setStores(res.data)
            console.log(res.data)
        })
    },[])
    // var image = new Image();
    // axios.get(`/file/${product.filename}`).then((res)=>{
    //     var image = new Image();
    //     image.src = 'data:image/png;base64,'+ res.data;
        
    //     console.log(image)
        
    // })
    // <img src={"http://localhost:8080/file/1673298441884-any-name-OnotuPassport.JPG"} alt="img" className='w-1/2' />

  return (
    <>
        <section  className='block h-auto'>
            <div className="container md:w-5/6 mx-auto px-2 md:px-0">
                {stores.map((store)=>{
                    return(
                        <div>
                            <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-9 my-12'>
                                <h2 className='text-5xl font-bold leading-tight '>{store.business_name}</h2>
                            </div>
                            <div>
                            <div className='flex flex-wrap'>
                                {loading && (
                                    <div className="flex justify-center w-full my-10">
                                        <Bars
                                            color='#E1C8B4'
                                            ariaLabel='loading'
                                        />
                                    </div>
                                )}
                                {store.productAndServices.map((product)=>{
                                return(

                                    (product.filename ? <ShopItem
                                        key={product?.id}
                                        location={store.location}
                                        city={store.city}
                                        businessName={store.business_name}
                                        phone={store.phone}
                                        {...product}
                                        onClick={()=>{}}
                                    /> : null)
                                )
                            })}
                            </div>
                        </div>
                            
                            
                        </div>
                    )
                })}
                
                {/* <DetailModal modalIsOpen={modalIsOpen} setIsOpen={modalIsOpen}/> */}
                
            </div>
        </section>
    </>
  )
}

export default Shop