import React from 'react'
import ProductCard from './ProductCard'
import ProductCardWithCarousel from './ProductCardWithCarousel'
import ProductData from '../ProductData'


export default function ProductsPage() {

  return (
    <>
      <h2 className='text-primary text-center mt-4 py-3 '>OUR PRODUCTS</h2>

      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center p-3 '>

        {ProductData.map((product)=>{
          return(
          <ProductCard
            imgURL=   {product.imgURLs[0]}
            title=    {product.title}
            subTitle= {product.subTitle}
            text2=    {product.text2}
            text1=    {product.text1}
            text3=    {product.text3}
            uListItems= {product.uListItems}
          />)
        })}
      </div>
    </>
  )
}
