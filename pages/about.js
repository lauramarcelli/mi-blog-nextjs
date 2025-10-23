import Layout from "../components/layout";
import styles from "../styles/About.module.css"

export default function About() {
    return (
        <Layout>
            <div className={styles.container}>
            <h1 className={styles.container} >👋Sobre mí</h1>
            <div className={styles.content}>
                <section className={styles.section} >
                    <p>Hola! Soy <span className={styles.highligth}>Laura</span>  y este es mi blog sobre tecnología y programación </p>
                </section>

                <section className={styles.section}>
                    <h2 className= {styles.sectionTitle}>🎯Mis objetivos</h2>
                    <ul className= {styles.list}>
                        <li className= {styles.listItem}>Aprender Next.js profundamente</li>
                        <li className= {styles.listItem}>Compartir conocimiento con la comunidad</li>
                        <li className= {styles.listItem}>Construir proyectos increíbles</li>
                        <li className= {styles.listItem}>Dominar el desarrollo full-stack</li>
                    </ul>
                </section>

                <section className= {styles.section}>
                    <h2 className= {styles.sectionTitle}>🚀 Habilidades en Desarrollo</h2>
                    <ul className= {styles.list}>
                        <li className= {styles.listItem}>HTML, CSS, Javascript</li>
                        <li className= {styles.listItem}>React y Next.Js</li>
                        <li className= {styles.listItem}>Git y Control de Versiones</li>
                        <li className= {styles.listItem}>Responsive Design</li>
                        <li className= {styles.listItem}>Node.js básico</li>
                    </ul>
                </section>

                <section className= {styles.section}>
                    <h2 className= {styles.sectionTitle}>💡Mi filosofía</h2>
                    <p> 
                        "Aprender haciendo" - Creo que la mejor manera de aprender programción es construyendo proyectos reales y enfrentando desafíos prácticos
                    </p>
                </section>
            </div>
            </div>
        </Layout>
    )
}