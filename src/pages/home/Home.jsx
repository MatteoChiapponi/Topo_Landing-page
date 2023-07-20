import './home.css'
import Carousel from '../../components/carousel/Carousel';
import sendWhatsappMessagge from '../../utils/sendMessage';

const Home = () => {
  sendWhatsappMessagge()
  return (
    <main>
      <p>home</p>
      <Carousel />
    </main>
  )
}

export default Home
