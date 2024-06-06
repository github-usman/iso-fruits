import React from 'react'

const NewsLetterCTA = () => {
  return (
    <div className='newsletter-cta'>
      <h3>Subscribe to our <span>newsletter</span></h3>
      <div>
        <input type="email" placeholder="Your Email"/>
        <button type='button'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetterCTA