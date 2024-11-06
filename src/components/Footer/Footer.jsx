import styles from './Footer.module.css'

import red_hestia from '../../assets/red_hestia.svg'
import instagram_icon from '../../assets/instagram_icon.svg'
import gitHub_icon from '../../assets/gitHub_icon.svg'

export default function Footer(){
    return(
        <>
            <footer className={styles.footer}>
                <p>&copy; Um oferecimento de DION 2024</p>
                <img src={red_hestia} alt="Hestia logo" className={styles.logo} />

                <div>
                    <a href="https://www.instagram.com/hestia.oficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img src={instagram_icon} alt="Instagram Icon" className={styles.icon}/></a>
                    <a href="https://github.com/HestiaDION"><img src={gitHub_icon} alt="GitHub icon" className={styles.icon}/></a>
                </div>
            </footer>
        </>
    )
}