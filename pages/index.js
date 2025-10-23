import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  const posts = [
    { id: 1, title: 'Mi primer post en Next.js', excerpt: "Aprendiendo a crear un blog en Next.js y React", date: '21 Oct 2024'},
    { id:2, title: "Por qué me gusta programar", excerpt: "Compartiendo mi experiencia en el mundo del desarrollo web", date: '20 Oct 2024'},
    { id:3, title: "Mis futuros proyectos", excerpt: "Ideas y proyectos que me gustaría desarrollar próximamente", date: '19 Oct 2024'}
  ]

  return (
    <Layout>
      <section className={styles.hero}>
        <h1 className={styles.title}> Mi blog personal🗒️</h1>
        <p className={styles.subtitle}>Bienvenida a mi espacio donde comparto mis aprendizajes y proyectos</p>
        <h2 style={{ color: '#333', marginTop: '40px'}}>Últimos Posts</h2>
            <div className={styles.postGrid}>
              {posts.map(post => (
                <article key={post.id} classname={styles.postCard}>
                  <h3 className={styles.postTitle}> {post.title} </h3>
                  <p className={styles.postDate}>📅 {post.date}</p>
                  <p className={styles.postExcerpt}> {post.excerpt} </p>
                  <a href={`/posts/${post.id}`}
                  className={styles.readMore}>
                    📖 Leer más ➡️
                  </a>
                </article>
              ))}
            </div>
        </section>
    </Layout>      
  )
}
