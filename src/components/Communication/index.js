import style from './Comm.module.scss'

function Comm() {
    return (
      <div className={style.comm}>
        <div className={style.commTextBox}>
          <p>Subscribe to our newsletter and <br/> get a 10% discount on your  <br/> first purchase!</p>
        </div>
        <input type="text" className={style.commMail} placeholder="Enter your E-Mail"></input>
        <button className={style.commButton}>Subscribe</button>
      </div>
    )
}

export default Comm