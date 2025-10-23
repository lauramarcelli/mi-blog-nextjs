import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import styles from '../../styles/Post.module.css'

export default function Post () {
    const router = useRouter()
    const { id } = router.query


const posts = {
    1: { title: 'Mi primer post en Next.js', content: `
        <h2>¡Hola mundo!</h2>
        <p>Este es mi primer post en el blog que estoy construyendo con Next.js. Estoy muy emocionado de compartir mi journey de aprendizaje con ustedes.</p>
        
        <h3>¿Por qué Next.js?</h3>
        <p>Next.js me está permitiendo crear aplicaciones web modernas de manera increíblemente rápida. Su sistema de routing automático y la capacidad de renderizado del lado del servidor son game-changers.</p>
        
        <h3>Lo que he aprendido hasta ahora:</h3>
        <p>Componentes de React, CSS Modules, routing dinámico, y mucho más. Cada día descubro features nuevas que hacen el desarrollo más divertido.</p>
      `,
    date: '21 Oct 2024'},
    2: { title: 'Por qué me gusta programar', content: `
        <h2>La magia de crear desde cero</h2>
        <p>La programación me permite materializar ideas. Es como tener un superpoder: con código puedo crear literalmente cualquier cosa que imagine.</p>
        
        <h3>Resolver problemas</h3>
        <p>Cada bug que resuelvo, cada feature que implemento, me da una satisfacción increíble. Es como resolver puzzles todo el día.</p>
        
        <h3>Comunidad increíble</h3>
        <p>La comunidad de desarrolladores es de las más generosas que conozco. Siempre hay alguien dispuesto a ayudar y compartir conocimiento.</p>
      `, date: '20 Oct 2024'},
    3: { title: 'Mis futuros proyectos', content: `
        <h2>Ideas en proceso</h2>
        <p>Tengo una lista interminable de proyectos que me gustaría construir. Aquí algunos de ellos:</p>
        
        <h3>App de gestión de tareas</h3>
        <p>Una aplicación para organizar mis proyectos y metas personales, con tracking de progreso y recordatorios inteligentes.</p>
        
        <h3>Plataforma de aprendizaje</h3>
        <p>Un sitio donde pueda compartir tutoriales y recursos sobre programación, organizados por nivel de dificultad.</p>
        
        <h3>Herramientas de productividad</h3>
        <p>Pequeñas aplicaciones que resuelvan problemas específicos que encuentro en mi día a día como desarrollador.</p>
      `, date: '19 Oct 2024'}
}

const post = posts[id]

if(!post){
    return(
        <Layout>
            <div className= {styles.container}>
            <h1>Post no encontrado</h1>
            <p>El post que buscas no existe</p>
            <a href="/" className= {styles.backLink}>⬅️ Volver al inicio</a>
            </div>
        </Layout>
    ) 
}

return (
    <Layout>
      <div className={styles.container}>
        <a href="/" className={styles.backLink}>
        ⬅️ Volver al inicio
        </a>

        <header className={styles.header}>
            <h1 className={styles.title}> {post.title} </h1>
            <p style= {{color: '#666'}}>📅 {post.date}</p>
        </header>

        <article
            className={styles.content}
            dangerouslySetInnerHTML={{__html: post.content}}
            />
      </div>
    </Layout>
)
}