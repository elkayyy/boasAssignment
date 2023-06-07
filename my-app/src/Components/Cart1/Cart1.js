import React from 'react'
import './Cart1.css'
import cart1r from '../../Assets/cart1Reversed.webp'

const Cart1 = () => {
    return (
        <div className='cart1Main'>
            <div className='cart1Inner'>
                <div className='card1InnerTextContainer'>
                    <div className='cart1InnerText'>
                        <span className='cart1DescTitle' style={{fontWeight:'bold' , fontSize:'2rem'}}>Saving lives while you live yours </span>
                        <br />
                        <span>We donate all profits to save kids lives, instead of giving it to rich investors.</span>
                        <br />
                        <span>Buy what you were already buying, for the same price, but now you're helping save kids lives, and that makes you a LifeSaver!</span>
                        <br />
                        <div className='cart1Btn'>
                            <button className='cart1Button'>Learn more</button>
                        </div>

                    </div>
                </div>
                <div className='cart1InnerPhoto'>
                    <div className='cart1PhotoContainer'><img className='cart1' src={cart1r} alt=''></img></div>
                </div>
            </div>
        </div>
    )
}

export default Cart1