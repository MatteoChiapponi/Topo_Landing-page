import { useEffect, useState } from 'react'
import './carousel.css'

const Carousel = () => {
  const data = [
    'src/assets/img/images.jpeg',
    'src/assets/img/images_bn.jpg',
    'hola',
    'chau',
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  const carouselScroll = () => {
    console.log(data[currentIndex]);
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1)
      return
    }
    setCurrentIndex(0)
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
            <img src={item} alt='' />
          </div>
        )
      })}
    </div>
  )
}

export default Carousel
