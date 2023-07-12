import style from './Footer.module.scss'

function Footer() {
    return (
      <footer className={style.footer}>
        <div className={style.navMenu}>
          <h5 className={style.navMenuTitle}>About Us</h5>
          <ul className={style.navMenuSub}>
            <li className={style.navMenuLink}>
              <a href="/" className={style.navMenuItem}>Work and Career at Our Company</a>
            </li >
            <li className={style.navMenuLink}>
              <a href="/" className={style.navMenuItem}>Contact Us</a>
            </li>
            <li className={style.navMenuLink}>
              <a href="/" className={style.navMenuItem}>Store Locations</a>
            </li>
         
          </ul>
        </div>
        <div className={style.navMenu}>
          <h5 className={style.navMenuTitle}>Our Services</h5>
          <ul className={style.navMenuSub}>
            <li className={style.navMenuLink}>
              <a href="/" className={style.navMenuItem}>Delivery and Pickup</a>
            </li>
            <li className={style.navMenuLink}>
              <a href="/" className={style.navMenuItem}>Payment and Credit</a>
            </li>
            <li className={style.navMenuLink}>
              <a href="/" className={style.navMenuItem}>Installment Payments</a>
            </li>
            <li className={style.navMenuLink}>
              <a href="/" className={style.navMenuItem}>Returns and Exchanges</a>
            </li>
          
          </ul>
        </div>
        <div className={style.social}>
          <h5 className={style.socialTitle}>Find Us on Social Media</h5>
          <div className={style.socialIconBox}>
            <img width={28} height={28} src="/img/facebook.svg" alt="#" className={style.socialIcon}/>
            <img width={28} height={28} src="/img/twitter.svg" alt="#" className={style.socialIcon}/>
            <img width={28} height={28} src="/img/instagram.svg" alt="#" className={style.socialIcon}/>
            <img width={28} height={28} src="/img/youtube.svg" alt="#" className={style.socialIcon}/>
          </div>
        </div>
      </footer>
    )
}

export default Footer