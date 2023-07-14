const Card = ({title,img,text}) => {
  return (
    <article className="service-article">
        <h3>{title}</h3>
        <img src={img} alt={title} />
        <p>{text}</p>
    </article>
  )
}

export default Card