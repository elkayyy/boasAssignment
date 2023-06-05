import React from 'react'
import './Featured.css'
import img1 from '../../Assets/feature1.webp'
import img2 from '../../Assets/feature2.webp'
import img3 from '../../Assets/feature3.webp'
import img4 from '../../Assets/feature4.webp'
import img5 from '../../Assets/feature5.avif'
import img6 from '../../Assets/feature6.webp'
const Featured = () => {
    return (
        <div className='featuredMain'>
            <div className='featuredTitle'>  <span className='featured' >We've been featured</span></div>
            <div className='featuredUpper'>
                <img className='img1' src={img1} alt=''></img>
                <img className='img2' src={img2} alt=''></img>
                <img src={img3} alt=''></img>
                <img src={img4} alt=''></img>
                <img src={img5} alt=''></img>



            </div>
            <div className='featuredDown'></div>


        </div>
    )
}

export default Featured