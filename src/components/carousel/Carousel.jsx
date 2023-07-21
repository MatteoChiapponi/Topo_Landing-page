import { useEffect, useState } from 'react'
import './carousel.css'

const Carousel = () => {
  const data = [
    'imagen',
    'src/assets/img/images.jpeg',
    'src/assets/img/images_bn.jpg',
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  const carouselScroll = () => {
    //console.log(data[currentIndex]);
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
            style={{
              transform: `translate(-${currentIndex * 100}%)`,
              backgroundImage: `url(${item})`,
            }}
            key={index}
          >
            <h4>Titulo</h4>
            <p>Descripción</p>
          </div>
        )
      })}
    </div>
  )
}

export default Carousel
