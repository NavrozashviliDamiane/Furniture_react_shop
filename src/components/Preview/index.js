import style from './Preview.module.scss'
import { useHistory } from 'react-router-dom';


 

function Preview() {
  const history = useHistory();


  const handleClick = () => {
    history.push('/room');
  };
    return (
      <section className={style.preview}>
        <div className={style.leftPreviewSide}>
          <img src="/img/room.jpg" alt="#" className={style.previewPhoto}></img>
        </div>
        <div className={style.rightPreviewSide}>
          <div className={style.previewBlock}>
            <h2 className={style.previewHeading}>New Collection</h2>
            <p className={style.previewText}>Our new shipments of Scandinavian-style <br/>furniture will pleasantly surprise you</p>
            <button className={style.previewButton} onClick={handleClick}>Discover</button>
          </div>
        </div>
      </section>

    )
}

export default Preview