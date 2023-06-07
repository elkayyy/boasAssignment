import React from 'react'
import './Cart3.css'

const Cart3 = () => {
    return (
        <div className='cart3Main'>
            <div className='cart3Inner'>
                <div className='cart3Item'>
                    <div className='cartItem3Inner'>

                        <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>€ 2.378</span>
                        <span style={{ fontStyle: 'Poppins, sans-serif' }}>Donated to charities that save kids' lives!</span>
                       
                        <button className='cartItem3Btn'>See donations</button>
                       
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Cart3