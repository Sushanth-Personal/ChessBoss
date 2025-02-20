import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <section className = {styles.NavBar}>
        <div className = {styles.leftTray}>
            <img src="https://res.cloudinary.com/dtu64orvo/image/upload/v1739876537/Gemini_Generated_Image_jns8abjns8abjns8__1_-removebg-preview_1_iuhjqk.png" alt="logo" />
            <h1>CHESS BOSS</h1>
        </div>
        <div className = {styles.midTray}></div>
        <div className = {styles.rightTray}></div>
    </section>
  )
}

export default NavBar