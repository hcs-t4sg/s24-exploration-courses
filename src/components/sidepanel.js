import styles from './sidepanel.module.css'; // Import CSS module
import Link from "next/link"

export default function Sidepanel() {
    return (
        <nav className={styles.sidebar}>
            <header>
                <div className={styles['image-text']}>
                    <span className={styles.image}>
                        <img src="./images/Harvard.png" alt="logo" />
                    </span>

                    <div className={`${styles.text} ${styles['header-text']}`}>
                        <span className={styles.name}>Dashboard</span>
                    </div>
                </div>
            </header>

            <div className={styles['menu-bar']}>
                <div className={styles.menu}>
                    <ul className={styles['menu-links']}>
                        <li>
                            <Link href="/progress">
                                <img src="./images/Graduation_Cap.png" alt="logo" />
                                <div className={styles.text}>My Progress</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/refresh">
                                <img src="./images/Synchronize.png" alt="logo" />
                                <div className={styles.text}>Refresh</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/download">
                            <img src="./images/Download_Cloud.png" alt="logo" />
                                <div className={styles.text}>Download</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart">
                                <img src="./images/Shopping_Cart.png" alt="logo" />
                                <div className={styles.text}>Crimson Cart</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/settings">
                                <img src="./images/Services.png" alt="logo" />
                                <div className={styles.text}>Settings</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};