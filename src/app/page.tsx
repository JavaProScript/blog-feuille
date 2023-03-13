import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          src="/images/Matrix-Still-2048x1229.jpeg"
          alt="Matrix background"
          width={900}
          height={600}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link href="#"
            className={styles.card}
            rel="noopener noreferrer">
          
            <h2 className={inter.className}>
              SSRS <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Comment j'ai utilisé SSRS et Reportbuilder pour faire des jolis tableaux.
            </p>
        </Link>



        <Link href="#"
            className={styles.card}
            rel="noopener noreferrer">
          <h2 className={inter.className}>
            Angular VS React <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Et lequel privilégier selon le projet.</p>
        </Link>

        <Link href="#"
            className={styles.card}
            rel="noopener noreferrer">
          <h2 className={inter.className}>
            Top 5 films de tech <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Les films un peu geek avec les meilleurs scénarios à mon goût.
          </p>
        </Link>
      </div>
    </main>
  )
}
