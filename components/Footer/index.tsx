import Image from "next/image"
import logo from "../../public/images/betalogo.svg";
import youtube_icon from "../../public/youtube_icon.svg";
import twitter_icon from "../../public/twitter_icon.svg";
import instagram_icon from "../../public/icon_instagram.svg";
import styles from "../Footer/Footer.module.css";
import React, { useState } from "react";
import Head from "next/head";


export const Footer = () => {
    const [email, setEmail] = useState(' ')

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const handleSubmit = (event: React.FormHTMLAttributes<SubmitEvent>) => {
        return
    }

    return (
        <footer className={styles.container_main}>
            <Head>
                <title>Lucky Talks</title>
                <meta name="description" content="Lucky Talks" />
                <link rel="icon" href="/ltfavicon.svg" />
            </Head>
            <div className={styles.img_wrapper}>
                <Image
                    className={styles.logo}
                    width={270}
                    height={47}
                    src={logo}
                    alt="Lukcy Dives Beta Logo"
                />
            </div>
            <p className={styles.paragraph}>Mantenha-se antenado(a)<br />sobre as novidades da <span className={styles.paragraph_site}>lucktalks.com</span></p>
            <form onSubmit={handleSubmit} >
                <label>
                    <input className={styles.form} type="email" value={email} onChange={handleEmail} placeholder={'EXEMPLO@EMAIL.COM'} />
                </label><br />
                <button type="submit" className={styles.btn_email}>Assinar a Newsletter</button>

            </form>
            <div className={styles.icons_container}>
                <div className={styles.icon_instagram}>
                    <a href="#">
                        <Image
                            src={instagram_icon}
                            alt="Instagram icon"
                            width={23}
                            height={23}

                        />
                    </a>
                </div>
                <div className={styles.icon_youtube}>
                    <a href="#">
                        <Image
                            src={youtube_icon}
                            alt="Youtube icon"
                            width={25}
                            height={25}

                        />
                    </a>
                </div>
                <div className={styles.icon_twitter}>
                    <a href="#">
                        <Image
                            src={twitter_icon}
                            alt="Twitter icon"
                            width={25}
                            height={25}

                        />
                    </a>
                </div >
            </div>
            <div className={styles.copyright_container}>
                <p className={styles.copyright}>© Todos os direitos reservados a luckytalks.com - 2022</p>
                <ul className={styles.links_container}>
                    <li className={styles.link1}><a href="#">Termos e Condições</a></li>
                    <li className={styles.link2} ><a href="#">Política de Cookies</a></li>
                    <li className={styles.link3}><a href="#">Política de Privacidade</a></li>
                    <li className={styles.link4}><a href="#">Política de Segurança</a></li>
                </ul>
            </div>
        </footer>
    )
}