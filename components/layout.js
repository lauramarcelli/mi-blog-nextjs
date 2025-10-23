
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <a
                   href="/"
                   className={styles.nav}
                   >
                    🏠 Inicio
                    </a>
                    <a
                    href="/about"
                    className={styles.navLink}>
                    👩‍💻 Sobre mí
                    </a> 
            </nav>

            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
                <p>© 2024 Mi blog - Hecho con Next.js y ❤️</p>
            </footer>
        </div>
    )
}