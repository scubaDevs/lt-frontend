import { NextPage } from "next";
import Image from "next/image";
import logo from "../public/images/betalogo.svg"
import photo_hero from "../public/images/photo_hero.svg";
import locker_icon from "../public/locker_icon.svg"
import styles from "../styles/FPassword.module.css"
import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";


const FPassword: NextPage = () => {

    const [email, setEmail] = useState('');



    return (
        <div className={styles.first_container}>
            <Head>
                <title>Lucky Talks</title>
                <meta name="description" content="Lucky Talks" />
                <link rel="icon" href="/ltfavicon.svg" />
            </Head>
            <span className={styles.mark1} />
            <span className={styles.mark2} />
            <span className={styles.mark3} />
            <span className={styles.mark4} />
            <div className={styles.initial_container}>
                <Link
                    href='/'
                >
                    <div className={styles.logo}>
                        <Image
                            width={270}
                            height={47}
                            src={logo}
                            alt="Lucky Dives Beta Logo"
                        />
                    </div>
                </Link>
                <div className={styles.external_container}>

                    <div className={styles.form_container}>
                        <div className={styles.icon_text_container}>
                            <div className={styles.login_icon}>
                                <Image
                                    src={locker_icon}
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <h1 className={styles.tittle}>
                                Recuperar Senha
                            </h1>
                        </div>
                        <form className={styles.form} > {/* onSubmit={handleSubmit} */}
                            <label>
                                <input className={`${styles.input} ${styles.input1}`} type="email" value={email} onChange={e => { setEmail(e.target.value) }} placeholder={'  DIGITE O EMAIL CADASTRADO'} />
                            </label>


                            <button type="submit" className={styles.btn_login}>Enviar</button>
                            <Link href='/login'><p className={styles.forgot_pass}>Retornar ao Login</p></Link>

                        </form>
                    </div>
                </div>

            </div>

        </div >
    )

}

export default FPassword;