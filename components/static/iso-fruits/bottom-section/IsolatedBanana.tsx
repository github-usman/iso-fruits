import Image from 'next/image'
import React from 'react'
import banana from '../../../../assets/images/static/iso-fruits/bottom-section/isolatedBanana.png'
import triangle from '../../../../assets/images/static/iso-fruits/bottom-section/triangleGradient.png'


const IsolatedBanana = () => {
  return (
    <div className='isolated-banana'>
      <div className="container">
        <h2 className='heading'>Isolated Banana</h2>
        <p className='description'>Bananas are rich in essential vitamins and minerals like potassium, vitamin C, and vitamin B6. They are also a good source of fiber and antioxidants. Incorporating bananas into your diet can support heart health, aid digestion, and boost energy levels.</p>
        <div className='img-container'>
          <Image src={banana} alt='Isolated banana' className='banana-img'/>
          <Image src={triangle} alt='Triangle1' className='triangle1-img'/>
        </div>
        <Image src={triangle} alt='Triangle2' className='triangle2-img'/>
      </div>
    </div>
  )
}

export default IsolatedBanana