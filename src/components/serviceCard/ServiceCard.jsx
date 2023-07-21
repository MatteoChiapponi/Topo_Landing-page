import "./ServiceCard.css"

function Service(props) {
    const { image, title, description } = props
    return (
        <article className="service_article" >
            <img src={image}/>
            <h4>{title}</h4>
            <p>{description}</p>
        </article>
    )
}
export default Service;