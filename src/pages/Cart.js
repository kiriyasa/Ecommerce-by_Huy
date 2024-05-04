import React, { useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { UserAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import { Icon } from 'react-icons-kit'
import { ic_add } from 'react-icons-kit/md/ic_add'
import { ic_remove } from 'react-icons-kit/md/ic_remove'
import { iosTrashOutline } from 'react-icons-kit/ionicons/iosTrashOutline'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

export const Cart = () => {

    const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <>
            <Navbar/>
            <>
                {shoppingCart.length !== 0 }
                <div className='cart-container'>
                    {
                        shoppingCart.length === 0 && <>
                            <div>Không có đồ trong giỏ hàng</div>
                            <div class='font-bold'><Link to="/shop">Trở về cửa hàng</Link></div>
                        </>
                    }
                    {shoppingCart && shoppingCart.map(cart => (
                        <div className='cart-card' key={cart.ProductID}>
                            
                            <div className='cart-img'>
                                <img src={cart.ProductImg} alt="not found" />
                            </div>

                            <div className='cart-name'>{cart.ProductName}</div>

                            <div className='cart-price-orignal'> {cart.ProductPrice} $</div>

                            <div className='inc' onClick={() => dispatch({ type: 'INC', id: cart.ProductID, cart })}>
                                <Icon icon={ic_add} size={24} />
                            </div>

                            <div className='quantity'>{cart.qty}</div>

                            <div className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })}>
                                <Icon icon={ic_remove} size={24} />
                            </div>
                            <div className='cart-price'>
                                {cart.TotalProductPrice} $
                            </div>

                            <button className='delete-btn' onClick={() => dispatch({ type: 'DELETE', id: cart.ProductID, cart })}>
                                <Icon icon={iosTrashOutline} size={24} />
                            </button>
                        </div>
                    ))
                    }
                    {shoppingCart.length > 0 && <div className='cart-summary'>
                        <div className='cart-summary-price'>
                            <span>Total Price</span>
                            <span>{totalPrice}</span>
                        </div>
                        <div className='cart-summary-price'>
                            <span>Total Qty</span>
                            <span>{totalQty}</span>
                        </div>
                        <div className='cart-submit'>
                            <Link to='/cashout' className='cashout-link'>
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                    Cash on delivery
                                </button>
                            </Link>
                        </div>
                    </div>}
                </div>
            </>
        </>
    )
}
export default Cart