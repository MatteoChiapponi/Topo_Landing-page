import { useEffect, useState } from 'react'
import './carousel.css'

const Carousel = () => {
  const data = ['src/assets/img/images.jpeg', 'src/assets/img/images_bn.jpg']
  const [currentIndex, setCUrrentIndex] = useState(0)

  const carouselScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCUrrentIndex(0)
    }
    return setCUrrentIndex(currentIndex - 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      carouselScroll()
    }, 3000)
    return () => clearInterval(interval)
  })

  return (
    <div className='carousel-container'>
      {data.map((item, index) => {
        return (
          <div
            className='carousel-item'
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            key={index}
          >
            <img src={item}/>
          </div>
        )
      })}
    </div>
  )
}

export default Carousel
