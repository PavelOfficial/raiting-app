import { JSX } from "react"
import styles from "./Footer.module.css"

const Footer = (): JSX.Element  => {
    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>
                OwlTop © 2020 - 2021 Все права защищены
            </div>
            <ul className={styles.userRules}>
                <li><a href="#" target='_blank'>Пользовательское соглашение</a></li>
                <li><a href="#" target='_blank'>Политика конфиденциальности</a></li>
            </ul>
        </footer>
    );
}

export default Footer;