import React from 'react'
import './FeaturedPhotos.css'

const FeaturedPhotos = () => {
    return (
        <div className='featuredPhotosMain'>
            <div id='featuredItems'>
                <div className='item1'>
                    <div className='itemInner'> <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>SHOP WOMEN</span>
                        <span style={{ fontStyle: 'Poppins, sans-serif' }}>Discounted vintage Levi's and more</span></div>

                </div>
                <div className='item2'>
                    <div className='itemInner'> <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>SHOP MEN</span>
                        <span style={{ fontStyle: 'Poppins, sans-serif' }}>Discounted vintage Levi's and more</span></div>

                </div>
                <div className='item3'>
                    <div className='itemInner'> <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>SHOP KIDS</span>
                        <span style={{ fontStyle: 'Poppins, sans-serif' }}>3-16</span></div>

                </div>
                <div className='item4'>
                    <div className='itemInner'> <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>SHOP BABY</span>
                        <span style={{ fontStyle: 'Poppins, sans-serif' }}>0-3</span></div>

                </div>
            </div>


        </div>
    )
}

export default FeaturedPhotos