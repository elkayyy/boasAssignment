import React from 'react'
import './Cart2.css'
import cart2 from '../../Assets/cart2.webp'

const Cart2 = () => {
    return (
        <div className='cart2Main'>
            <div className='cart2Inner'>
                <div className='card2InnerTextContainer'>
                    <div className='cart2InnerText'>
                        <span className='cart2DescTitle' style={{fontWeight:'bold' , fontSize:'2rem'}}>Sustainable Kids' Products</span>
                        <br />
                        <span>We read the labels, do the research and find the products you want, so you don't have to.</span>
                        <br />
                        <span>Everything you want for your kid in one place.</span>
                        <br />
                        <div className='cart1Btn'>
                            <button className='cart1Button'>How?</button>
                        </div>

                    </div>
                </div>
                <div className='cart2InnerPhoto'>
                    <div className='cart2PhotoContainer'><img className='cart2' src={cart2} alt=''></img></div>
                </div>
            </div>
        </div>
    )
}

export default Cart2