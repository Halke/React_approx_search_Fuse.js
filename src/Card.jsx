import "./Card.css";

const Card = ({image, title, author, url}) => {
    return (
      <div className="CardWrapper">
        <div className="ColImg">
          <img className="Img" src={image} alt={title} />
        </div>
        <div className="ColDetail">
          <div className="Header">
            <div className="BookTitle">{title}</div>
          </div>
          <div className="Description">{author}</div>
          <a className="Link" href={url}>
            Learn more
          </a>
        </div>
      </div>
    );
  };

export default Card
