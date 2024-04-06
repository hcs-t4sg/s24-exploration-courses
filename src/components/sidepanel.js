import styles from './sidepanel.module.css'; // Import CSS module

export default function Sidepanel() {
    return (
        <nav className={styles.sidebar}>
            <header>
                <div className={styles['image-text']}>
                    <span className={styles.image}>
                        <img src="./images/harvard.png" alt="logo" />
                    </span>

                    <div className={`${styles.text} ${styles['header-text']}`}>
                        <span className={styles.name}>Dashboard</span>
                    </div>
                </div>

                <i className='bx bx-chevron-right toggle'></i>
            </header>

            <div className={styles['menu-bar']}>
                <div className={styles.menu}>
                    <ul className={styles['menu-links']}>
                        <li className={styles['nav-link']}>
                            <a href="#">
                                <img className={styles.image} src="./images/Graduation_Cap.png" alt="logo" />
                                <div className={`${styles.text} ${styles['nav-text']}`}>My Progress</div>
                            </a>
                        </li>
                        <li className={styles['nav-link']}>
                            <a href="#">
                                <img src="./images/Synchronize.png" alt="logo" />
                                <div className={`${styles.text} ${styles['nav-text']}`}>Refresh</div>
                            </a>
                        </li>
                        <li className={styles['nav-link']}>
                            <a href="#">
                            <img src="./images/Download_Cloud.png" alt="logo" />
                                <div className={`${styles.text} ${styles['nav-text']}`}>Download</div>
                            </a>
                        </li>
                        <li className={styles['nav-link']}>
                            <a href="#">
                                <img src="./images/Shopping_Cart.png" alt="logo" />
                                <div className={`${styles.text} ${styles['nav-text']}`}>Crimson Cart</div>
                            </a>
                        </li>
                        <li className={styles['nav-link']}>
                            <a href="#">
                                <img src="./images/Services.png" alt="logo" />
                                <div className={`${styles.text} ${styles['nav-text']}`}>Settings</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
