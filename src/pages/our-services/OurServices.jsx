import Card from '../../components/card/Card'
import './ourServices.css'
const OurServices = () => {
  return (
    <main>
      <h1 className='title'>nuestros servicios</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
        excepturi libero pariatur natus corrupti animi cumque dolorum, quaerat
        est quis iste mollitia magni aliquam voluptatum sit consequatur laborum,
        unde aspernatur.
      </p>
      <section className='services-container'>
        <Card
          title={'titulo de pureba'}
          img='/src/assets/img/images.jpeg'
          text={'texto de prueba'}
        />
        <Card
          title={'titulo de pureba'}
          img='/src/assets/img/images.jpeg'
          text={'texto de prueba'}
        />
        <Card
          title={'titulo de pureba'}
          img='/src/assets/img/images.jpeg'
          text={'texto de prueba'}
        />
        <Card
          title={'titulo de pureba'}
          img='/src/assets/img/images.jpeg'
          text={'texto de prueba'}
        />
      </section>
    </main>
  )
}

export default OurServices
