import Head from "next/head";
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste reiciendis aliquid nisi fugiat excepturi eius, in modi impedit laboriosam soluta sapiente provident a dolores ducimus doloribus? Sequi aliquam vero ab sint dolor? Recusandae error accusantium optio, ipsam ipsa incidunt voluptas necessitatibus sunt atque tempore delectus mollitia illo, consectetur reprehenderit alias.</p>
          </a>
          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste reiciendis aliquid nisi fugiat excepturi eius, in modi impedit laboriosam soluta sapiente provident a dolores ducimus doloribus? Sequi aliquam vero ab sint dolor? Recusandae error accusantium optio, ipsam ipsa incidunt voluptas necessitatibus sunt atque tempore delectus mollitia illo, consectetur reprehenderit alias.</p>
          </a>
          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste reiciendis aliquid nisi fugiat excepturi eius, in modi impedit laboriosam soluta sapiente provident a dolores ducimus doloribus? Sequi aliquam vero ab sint dolor? Recusandae error accusantium optio, ipsam ipsa incidunt voluptas necessitatibus sunt atque tempore delectus mollitia illo, consectetur reprehenderit alias.</p>
          </a>
        </div>
      </main>
    </>


  )
}