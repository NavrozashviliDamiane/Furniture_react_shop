import { Link } from 'react-router-dom';
import style from './Header.module.scss'

function Header() {
    return (
      <header className={style.header}>
        <Link to="/" className={style.headerLink}>
          <p className={style.headerLogo} href="/">ESHOP</p>
        </Link>
        <input type="text" className={style.headerTextplace} placeholder="Search"></input>
        <div className={style.headerCategories}>
          
          <p className={style.categoriesItem}>Collection</p>
          <p className={style.categoriesItem}>Furniture</p>
          <p className={style.categoriesItem}>Lightning</p>
          <p className={style.categoriesItem}>Accessories</p>
       
        </div>
        <div className="d-flex align-center">
          <p className={style.headerTown}>Tbilisi</p>
          <img width={24} height={24} src="/img/user.svg" alt="#" className={style.headerIcon}/>
          <img width={24} height={24} src="/img/heart.svg" alt="#" className={style.headerIcon}/>
          <img width={24} height={24} src="/img/cart.svg" alt="#" className={style.headerIcon}/>
        </div>
      </header> 
    )
}

export default Header