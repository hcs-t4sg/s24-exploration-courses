import styles from './sidepanel.module.css'; // Import CSS module


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
                            <a>
                                <img src="./images/Graduation_Cap.png" alt="logo" />
                                <div className={styles.text}>My Program</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="./images/Synchronize.png" alt="logo" />
                                <div className={styles.text}>Refresh</div>
                            </a>
                        </li>
                        <li>
                            <a>
                            <img src="./images/Download_Cloud.png" alt="logo" />
                                <div className={styles.text}>Download</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="./images/Shopping_Cart.png" alt="logo" />
                                <div className={styles.text}>Crimson Cart</div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="./images/Services.png" alt="logo" />
                                <div className={styles.text}>Settings</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};