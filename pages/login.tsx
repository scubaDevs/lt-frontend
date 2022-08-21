import { NextPage } from "next";
import Image from "next/image";
import logo from "../public/images/betalogo.svg"
import photo_hero from "../public/images/photo_hero.svg";
import login_icon from "../public/login_icon.svg"
import styles from "../styles/Login.module.css"
import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";


const Login: NextPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');


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
                <Link href='/'>
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
                    <div className={styles.photo_hero}>
                        <Image
                            src={photo_hero}

                        />
                    </div>
                    <div className={styles.form_container}>
                        <div className={styles.icon_text_container}>
                            <div className={styles.login_icon}>
                                <Image
                                    src={login_icon}
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <h1 className={styles.tittle}>
                                Login
                            </h1>
                        </div>
                        <form className={styles.form} > {/* onSubmit={handleSubmit} */}
                            <label>
                                <input className={`${styles.input} ${styles.input1}`} type="email" value={email} onChange={e => { setEmail(e.target.value) }} placeholder={'  EXEMPLO@EMAIL.COM'} />
                            </label>
                            <label>
                                <input className={styles.input} type="password" value={password} onChange={e => { setPassword(e.target.value) }} placeholder={'  DIGITE A SENHA'} />
                            </label>
                            <label>
                                <input className={styles.input} type="password" value={passwordConfirmation} onChange={e => { setPasswordConfirmation(e.target.value) }} placeholder={'  CONFIRME A SENHA'} />
                            </label>

                            <button type="submit" className={styles.btn_login}>Enviar</button>
                            <Link href='/fpassword'><p className={styles.forgot_pass}>Esqueci minha senha</p></Link>

                        </form>
                    </div>
                </div>
                <Link href='/signup' >
                    <button className={styles.btn_signup}>
                        Cadastre-se
                    </button>
                </Link>
            </div>

        </div>
    )

}

export default Login;