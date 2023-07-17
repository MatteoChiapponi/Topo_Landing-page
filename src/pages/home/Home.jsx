import './home.css'
import Carousel from '../../components/carousel/Carousel'

const Home = () => {
  console.log('home')
  return (
    <main>
      <p>home</p>
      <Carousel />
        <img
          className='whatsapp-logo'
          src='src\assets\img\whatsapp-logo-icon.jpg'
          alt='WhatsApp logo'
        />
    </main>
  )
}

export default Home
