import './home.css'
import Carousel from '../../components/carousel/Carousel'
import ServiceCard from '../../components/serviceCard/ServiceCard'
import { serviceData } from '../../utils/serviceCardData'
import sendWhatsappMessagge from '../../utils/sendMessage'

const Home = () => {
  //sendWhatsappMessagge()
  return (
    <main>
      <h1>Proyectos Topográficos Groma</h1>
      <Carousel />
      <h2>Nuestros servicios</h2>
      <section className='services_section'>
        {serviceData.map((item) => (
          <ServiceCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
      <img
        className='whatsapp-logo'
        src='src\assets\img\whatsapp-logo-icon.jpg'
        alt='WhatsApp logo'
      />
    </main>
  )
}

export default Home
