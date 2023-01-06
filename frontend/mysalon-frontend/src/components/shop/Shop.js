import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Bars } from 'react-loader-spinner'
import productImage from '../../assets/images/cottonbro.jpg'
import productImage2 from '../../assets/images/burnout.jpg'
import productImage3 from '../../assets/images/cleanfade.jpg'
import productImage4 from '../../assets/images/wavvy.jpg'
import ShopItem from './ShopItem'

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
            id: 1,
            name: "Spotty waves",
            image: productImage4,
            business_name: "Changes Salon",
            starred: true,
            desc: "Get yourself wavvy",
            price: "1000"
        },
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
            id: 1,
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

    const viewDetail = () => {

    }
  return (
    <>
        <section  className='block h-auto'>
            <div className="container md:w-5/6 mx-auto px-2 md:px-0">
                <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-9 my-12'>
                    <h2 className='text-5xl font-bold leading-tight '>Changes Hair Salon</h2>
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
                        {products.map(product => (
                            <ShopItem
                            key={product?.id}
                            {...product}
                            onClick={() => viewDetail()}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}

export default Shop