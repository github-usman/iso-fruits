import Image from 'next/image'
import React, { lazy } from 'react'
import banana from '../../../../assets/images/static/iso-fruits/bottom-section/isolatedBanana.png'
import triangle from '../../../../assets/images/static/iso-fruits/bottom-section/triangleGradient.png'
import golden_isolated_banana from '../../../../assets/images/static/iso-fruits/bottom-section/golden_isolated_banana.svg'


const IsolatedBanana = () => {
  return (
    <div className='isolated-banana'>
      <div className="container">
      <Image src={triangle} alt='Triangle2' className='triangle2-img' loading='lazy'/>
      <Image src={golden_isolated_banana} alt='golderIsolated banana' className='golden-banana-img' loading='lazy'/>
        <h2 className='heading'>Isolated Banana</h2>
        <p className='description'>Bananas are rich in essential vitamins and minerals like potassium, vitamin C, and vitamin B6. They are also a good source of fiber and antioxidants. Incorporating bananas into your diet can support heart health, aid digestion, and boost energy levels.</p>
        <div className='img-container'>
          <Image src={banana} alt='Isolated banana' className='banana-img' loading='lazy'/>
            <Image src={triangle} alt='Triangle1' className='triangle1-img' loading='lazy'/>
        </div>
      </div>
    </div>
  )
}

export default IsolatedBanana