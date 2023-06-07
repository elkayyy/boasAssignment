import React from 'react'
import './CustomerReviews.css'

const CustomerReviews = () => {

  const star = <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"/></svg>
  const dot =  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 256 256"><path fill="currentColor" d="M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16Z"/></svg>
  return (
    <div className='customerReviewsMain'>
        <div className='customerReviewsInner'>
                <div className='customerReviewsTitle'><span style={{fontSize:'2.5rem', fontWeight:'bold'}}>What our customers say</span></div>
                <div className='customerReviewComments'>
                        <div className='customerReviewColumn'>
                            <span>{star} {star} {star} {star} {star}</span>
                            <span>"Its normally so time consuming to read labels, BOAS does that for me"</span>
                            <span>- Andre</span>
                        </div>

                        <div className='customerReviewColumn1'>
                        <span>{star} {star} {star} {star} {star}</span>
                        <span>"In Indonesia I've seen first-hand what climate change does to forests. Anything that tries to help is desperately needed."</span>
                            <span>- Fleur</span>
                            
                        </div>

                </div>
                <div className='customerReviewPagination'>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 256 256"><path fill="currentColor" d="M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32Zm0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16Z"/></svg>
                {dot} {dot} {dot} {dot}</div>

        </div>


    </div>
  )
}

export default CustomerReviews