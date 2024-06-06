import Image from 'next/image'
import React from 'react'
import banana from '../../../../assets/images/static/iso-fruits/bottom-section/isolatedBanana.png'
import triangle from '../../../../assets/images/static/iso-fruits/bottom-section/triangleGradient.png'
import triangleMobile from '../../../../assets/images/static/iso-fruits/bottom-section/triangleMobile.png'
import golden_isolated_banana from '../../../../assets/images/static/iso-fruits/bottom-section/golden_isolated_banana.svg'


const IsolatedBanana = () => {
  return (
    <div className='isolated-banana'>
      <div className='container'>
        <Image src={golden_isolated_banana} alt='golderIsolated banana' className='golden-banana-img' loading='lazy'/>
      </div>
      <div className="container">
        <Image src={triangle} alt='Triangle2' className='triangle2-img' loading='lazy'/>
        <Image src={triangleMobile} alt='Triangle2' className='triangle2Mobile-img' loading='lazy'/>
        <h2 className='heading'>Isolated Banana</h2>
        <div className="description">
          <p>Bananas are rich in essential vitamins and minerals like potassium, vitamin C, and vitamin B6. They are also a good source of fiber and antioxidants. Incorporating bananas into your diet can support heart health, aid digestion, and boost energy levels.</p>
          <p>Bananas are indeed a powerhouse of essential nutrients. They are rich in potassium, which is crucial for maintaining proper heart function and blood pressure levels. Additionally, bananas contain vitamin C, an antioxidant that helps protect cells from damage and boosts the immune system.</p>
          <p>The vitamin B6 in bananas plays a key role in brain health and helps convert food into energy. Bananas are also a good source of fiber, which promotes digestive health and helps maintain regular bowel movements.</p>
          <p>Moreover, bananas contain several antioxidants, including dopamine and catechins, which have been linked to a reduced risk of heart disease and degenerative illnesses. Incorporating bananas into your diet can support heart health, aid digestion, and boost energy levels, making them an excellent choice for a healthy snack or addition to meals.</p>
        </div>
        <div className='img-container'>
          <Image src={banana} alt='Isolated banana' className='banana-img' loading='lazy'/>
            <Image src={triangle} alt='Triangle1' className='triangle1-img' loading='lazy'/>
            <Image src={triangleMobile} alt='Triangle2' className='triangle1Mobile-img' loading='lazy'/>
        </div>
      </div>
    </div>
  )
}

export default IsolatedBanana