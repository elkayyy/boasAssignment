import React from 'react'
import './MainCart.css'

const MainCart = () => {
    return (
        <div className='mainCart'>
            <span className='mainCartItem'>ALL PROFITS DONATED TO SAVE KIDS LIVES</span>
            <div className='mainCartInner'>
                <div className='mainCartInnerContent'>
                <div className='mainCartInnerItem1'><h1>Meet the new shopping experience for vintage jeans</h1></div>
                <div className='mainCartInnerItem2'><span style={{fontWeigt:'normal' , fontSize:'1.1rem'}}>BOAS is the best place for sustainable and pre-owned fashion, where all profits are donated to charity.</span></div>
                <div className='mainCartInnerItem3'>
                    <button className='shopNow'> SHOP NOW</button>
                    <button className='aboutOurMission'>ABOUT OUR MISSION</button>
                </div>
                </div>
              

            </div>



        </div>
    )
}

export default MainCart