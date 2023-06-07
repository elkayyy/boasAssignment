import React from 'react'
import './NewsLetter.css'


const NewsLetter = () => {
  return (
    <div className='newsLetterMain'>
        <div className='newsLetterInner'>
            <div className='newsLetterInnerContainer'>
           <span style={{fontSize:'2rem', fontWeight:'bold'}}>Join the Lifesaver NewsLetter</span>
           <span style={{fontStyle: 'Poppins, sans-serif'}}>Get updates and tips from the world of sustainability, circular fashion, and ethical business.</span>
           <div className='inputSignUp'>
            <input className='underLineInput'  placeholder='Email Address' type="text"></input>
            <button className='signUp'>Sign Up</button>
            </div>
           </div>
        </div>
    </div>
  )
}

export default NewsLetter