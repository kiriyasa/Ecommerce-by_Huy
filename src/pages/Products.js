import React, { useContext,useState } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { CartContext } from '../context/CartContext'

export const Products = () => {

    const { products } = useContext(ProductsContext);

    const { dispatch } = useContext(CartContext);
    
    const [search, setSearch] = useState('');
    return (
        <>  
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="mx-auto mt-8 w-1/2 space-x-4">
                <input type="search" id="default-search" onChange={(e) => setSearch(e.target.value)} class="w-full p-4 pl-7 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search name,..." required/>
                {/* <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
            </div>
            {products.length !== 0 }
            <div className='gallery'>
                {products.length === 0 && <div>slow internet...no products to display</div>}
                {products.filter((product)=> {
                    return search.toLowerCase() === '' ? product : product.ProductName.toLowerCase().includes(search);
                }).map((product,index)=>(
                    <div className='content-card' key={index}>
                        <img className='card-img' src={product.ProductImg} alt='not found'></img>   
                        <h3 className='h3-text-card'>{product.ProductName}</h3>
                        <p className='p-text-card'>{product.ProductDes}</p>
                        <h6 className='h6-text-card'>${product.ProductPrice}</h6>
                        <button className='button-add' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>Add to cart</button>
                    </div>
                ))}
            </div>
        </>
    )
}
