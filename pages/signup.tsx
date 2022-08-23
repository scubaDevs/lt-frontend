import styles from '../styles/Signup.module.css';
import { Footer } from '../components/Footer';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/betalogo.svg';
import { useState } from 'react';


const SignUp = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_Password, setConfirm_Password] = useState('');

    return (
        <>
            <header className={styles.container}>

                <Head>
                    <title>Lucky Talks</title>
                    <meta name="description" content="Lucky Talks" />
                    <link rel="icon" href="/ltfavicon.svg" />
                </Head>
                <Link href='/' passHref>
                    <div className={styles.logo_container}>
                        <Image

                            width={270}
                            height={47}
                            src={logo}
                            alt="Lucky Dives Beta Logo"
                        />
                    </div>
                </Link>
            </header>
            <main className={styles.main_container}>
                <div className={styles.initial_container}>
                    <h1 className={styles.tittle}>Perfil Verdadeiro</h1>
                    <p className={styles.sub}>*Informações pessoais sensíveis não serão públicas dentro da plataforma.</p>
                    <form>
                        <ul className={styles.ulForm}>
                            <li className={`${styles.liItens} ${styles.liNameItem}`}>
                                <label htmlFor="name" className={`${styles.allLabels} ${styles.NameLabel}`}>Nome</label>
                                <input className={`${styles.inputName} ${styles.inputAll}`} id="name" type="text" value={name} name='name' onChange={e => { setName(e.target.value) }} placeholder="Digite o seu nome" />
                            </li>
                            <li className={`${styles.liItens} ${styles.liSurnameItem} `}>
                                <label htmlFor="surname" className={`${styles.allLabels} ${styles.surnameLabel} ${styles.inputSurname}`}>Sobrenome</label>
                                <input className={`${styles.inputSurname} ${styles.inputAll}`} id="surname" type="text" value={surname} name='surname' onChange={e => { setSurname(e.target.value) }} placeholder="Digite o seu sobrenome" />
                            </li>
                            <li className={`${styles.liItens} ${styles.liEmailItem} `}>
                                <label htmlFor="email" className={`${styles.allLabels} ${styles.EmailLabel} ${styles.inputEmail}`}>Email</label>
                                <input className={`${styles.inputEmail} ${styles.inputAll}`} id="email" type="email" value={email} name='email' onChange={e => { setEmail(e.target.value) }} placeholder="Digite o seu email" />
                            </li>
                            <li className={`${styles.liItens} ${styles.liSenhaItem} `}>
                                <label htmlFor="senha" className={`${styles.allLabels} ${styles.senhaLabel} ${styles.inputSenha}`}>Senha</label>
                                <input className={`${styles.inputSenha} ${styles.inputAll}`} id="senha" type="password" value={password} name='senha' onChange={e => { setPassword(e.target.value) }} placeholder="Digite uma senha" />
                            </li>
                            <li className={`${styles.liItens} ${styles.liConfirmaSenhaItem} `}>
                                <label htmlFor="confirmasenha" className={`${styles.allLabels} ${styles.confirmaSenhaLabel} ${styles.inputConfirmaSenha}`}>Confirmar Senha</label>
                                <input className={`${styles.inputConfirmaSenha} ${styles.inputAll}`} id="confirmasenha" type="password" value={confirm_Password} name='confirmasenha' onChange={e => { setConfirm_Password(e.target.value) }} placeholder="confirme a senha" />
                            </li>

                            {/*           <li class="twoColumnPart">
                                <label for="email">Email</label>
                                <input id="email" type="text" value="" name="email">
                            </li>
                            <li>
                                <label for="subject">Subject</label>
                                <input id="subject" type="text" value="" name="subject">
                            </li>
                            <li>
                                <label for="message">Message</label>
                                <textarea id="message" type="text" name="message"></textarea>
                            </li> */}
                        </ul>
                    </form>
                </div>
            </main>

            <Footer />
        </>


    )
}

export default SignUp;