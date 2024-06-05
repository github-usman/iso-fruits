import React from 'react'

const NewsLetterCTA = () => {
  return (
    <div className='newsletter-cta'>
      <div>
        <h3>Subscribe to our <span>newsletter</span></h3>
        <input type="email" placeholder="Your Email"/>
        <button type='button'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetterCTA