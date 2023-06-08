import React from 'react'
import './Brand.css'
import levis from '../../Assets/Brands/brand.svg'
import pure from '../../Assets/Brands/brand1.webp'
import logoBoas from '../../Assets/Brands/boasLogo.webp'
import happyFlute from '../../Assets/Brands/brand2.avif'

const Brands = () => {
    return (
        <div className='brandsMain'>
            <span style={{fontWeight :'bold' , fontSize:'2.5rem'}}>Our brands</span>
            <div className='brandsInner'>
                <div className='brandItems'>
                    <div className='brandItem1'><img src={levis} alt=''></img></div>
                    <div className='brandItem2'><img src={pure} alt=''></img></div>
                    <div className='brandItem3'><img  className='logoBoas' src={logoBoas} alt=''></img></div>
                    <div className='brandItem4'><img src={happyFlute} alt=''></img></div>
                </div>
            </div>

        </div>
    )
}

export default Brands