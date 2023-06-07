import React from 'react'
import './FeaturedPhotos2.css'

const FeaturedPhotos2 = () => {
  return (
    <div className='featuredPhotosMain'>
        <div className='featuredItemsTitle'><span style={{fontSize:'2.1rem', fontWeight:'bold'}}>For the little ones</span></div>
    <div id='featuredItems'>
        
        <div className='item5'>
            <div className='itemInner'> <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>best sellers</span>
               </div>

        </div>
        <div className='item6'>
            <div className='itemInner'> <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>nursery</span>
              </div>

        </div>
        <div className='item7'>
            <div className='itemInner'> <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>newborn</span>
                </div>

        </div>
        <div className='item8'>
            <div className='itemInner'> <span style={{ fontSize: '2rem', fontWeight: 'bold',fontStyle: 'Poppins, sans-serif' }}>all sustainable</span>
               </div>

        </div>
    </div>


</div>
  )
}

export default FeaturedPhotos2