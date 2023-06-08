import React from 'react'
import './BoasBlog.css'
import boasBlogPhoto from '../../Assets/Featured/slider.webp'

const BoasBlog = () => {
    return (
        <div className='boasBlogMain'>
            <div className='boasBlogInner'>
                <div className='boasBlogPhoto' style={{backgroundImage:`url(${boasBlogPhoto})`}}> </div>
                <div className='boasBlogText'>
                    <div className='boasTextContainer'>
                        <div className='boasText'>
                            <span style={{fontSize:'1.5rem'}}>May 25 2023</span>
                            <span style={{fontSize:'2rem', fontWeight:'bold'}}>Upcycling: 10 Fashion Influencers To Follow</span>
                            <span style={{fontStyle: 'Poppins, sans-serif' }}>In recent years, the fashion industry has experienced a growing focus on sustainability and eco-friendly</span>
                            <div className='boasBlogBtns'>
                                <button className='readMoreBtn'>Read more</button>
                                <button className='seeAllArticlesBtn'>See all articles</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default BoasBlog