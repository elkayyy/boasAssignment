import React from 'react'
import './Featured.css'
import img1 from '../../Assets/FeaturedPics/feature1.webp'
import img2 from '../../Assets/FeaturedPics/feature2.webp'
import img3 from '../../Assets/FeaturedPics/feature3.webp'
import img4 from '../../Assets/FeaturedPics/feature4.webp'
import img5 from '../../Assets/FeaturedPics/feature5.avif'
import img6 from '../../Assets/FeaturedPics/feature6.webp'
import img7 from '../../Assets/FeaturedPics/feature7.webp'

const Featured = () => {
    return (
        <div className='featuredMain'>
            <div className='featuredTitle'>  <span className='featured' >We've been featured</span></div>
            <div className='featuredUpper'>
                <div className='imgContainer'><img className='img1' src={img1} alt=''></img></div>
                <div className='imgContainer'><img className='img2' src={img2} alt=''></img></div>
                <div className='imgContainer'><img src={img3} alt=''></img></div>
                <div className='imgContainer'><img src={img4} alt=''></img></div>
                <div className='imgContainer'><img src={img5} alt=''></img></div>
                <div className='imgContainer'><img className='img6' src={img6} alt=''></img></div>
            </div>
            <div className='featuredDown'>

                <div className='featuredDownLeft'>
                    <div className='imgFeaturedContainer'><img className='img7' src={img7} alt=''></img></div>
                </div>

                <div className='featuredDownRight'>
                    <div className='imgDescription'>
                        <span className='imgDescTitle'>Second-hand jeans at the perfect price </span>
                        <br/>
                        <span>All our jeans prices drop every few hours - here's how it works:</span>
                        <br/>
                        <span> <span style={{fontWeight:'bold'}}>1 -</span> Find you perfect pair(s)</span>
                        <span> <span style={{fontWeight:'bold'}}>2 -</span> Check the price and countdown timer</span>
                        <span> <span style={{fontWeight:'bold'}}>3 -</span> Buy -or- wait for the price drop</span>
                        <br/>
                        <span>Wait too long and someone else will snatch your jeans...</span>
                        <div className='discountBtn'>
                        <button className='discountJeansBtn'>Get your discounted jeans</button>
                        </div>
                       
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Featured