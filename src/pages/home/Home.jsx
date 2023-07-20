import './home.css'
<<<<<<< HEAD
import Carousel from '../../components/carousel/Carousel';
import sendWhatsappMessagge from '../../utils/sendMessage';

const Home = () => {
  sendWhatsappMessagge()
=======
import Carousel from '../../components/carousel/Carousel'

const Home = () => {
  console.log('home')
>>>>>>> 9ed33a23c91ba075b217b709edff38e40591f6ec
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
