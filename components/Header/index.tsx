import styles from "../Header/Header.module.css"
import Image from "next/image"
import logo from "../../public/images/betalogo.svg"
import Head from "next/head"
import Link from "next/link"

export const Header = () => {
    return (
        <header className={styles.container}>

            <Head>
                <title>Lucky Talks</title>
                <meta name="description" content="Lucky Talks" />
                <link rel="icon" href="/ltfavicon.svg" />
            </Head>
            <Link href='/' >
                <div className={styles.logo_container}>
                    <a id='home' href="#home"></a>
                    <Image

                        width={270}
                        height={47}
                        src={logo}
                        alt="Lucky Dives Beta Logo"
                    />
                </div>
            </Link>
            <nav className={styles.nav_container}>
                <ul className={styles.list_container}>
                    <li className={styles.link1}><a href="#" > Desafios </a></li>

                    <li className={styles.link2}><a href="#hiw">Como Funciona</a></li>

                    <li className={styles.link3}><a href="#">Segurança</a></li>

                    <li className={styles.link4}><a href="#">Torne-se Premium</a></li>

                </ul>
                <Link href='/login' passHref>
                    <button className={styles.btn_header}>Login/Cadastro</button>
                </Link>
            </nav>
        </header >
    )
}