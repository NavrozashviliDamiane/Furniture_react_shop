import React from 'react'
import { Link } from 'react-router-dom';
import style from './Card.module.scss'

function Card(props) {

  const [isAdded, setIsAdded] = React.useState(false);

  const handleButtonClick = () => {
    setIsAdded(!isAdded);
  };

  const buttonClassName = isAdded ? `${style.cardButton} ${style.addedColor}` : style.cardButton;

  return (
    <div className={style.card}>
      <Link to={`/otherpage/${props.id}`} className={style.cardPreviewImage}>
        <div className={style.cardPreview}>
          <img src={props.imgUrl} alt="#" />
        </div>
      </Link>
      <div className={style.cardText}>
       
          <p className={style.cardHeading}>
            {props.title}
          </p>
          <p className={style.cardCash}>
            {props.price}
          </p>
     
      </div>
      <div className="d-flex pb-20">
        <button className={buttonClassName} onClick={handleButtonClick}>
          {isAdded ? 'Add to Cart' : 'Add to Cart'}
        </button>
        <img width={32} height={32} src="/img/heart.svg" alt="#" className={style.cardHeart} />
      </div>
    </div>
  );
}

export default Card;