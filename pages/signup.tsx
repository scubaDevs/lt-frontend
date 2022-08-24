import styles from '../styles/Signup.module.css';
import { Footer } from '../components/Footer';
import { Country_Phone } from '../components/Country_Phone';
import { LiInputRadio } from '../components/LiInputRadio/LiInputRadio';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/betalogo.svg';
import { useState } from 'react';
import { Schaduale } from '../components/Schaduale/Schaduale';


type PropsName = {
    list: any[]
}


const SignUp = ({ list }: PropsName) => {



    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_Password, setConfirm_Password] = useState('');
    const [fakeName, setFakeName] = useState('');


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
                            <Country_Phone
                                countryList={list}
                            />
                            <LiInputRadio

                            />


                        </ul>
                    </form>

                    <div className={styles.fake_container}>
                        <h1 className={styles.tittleFake}>Perfil Fictício</h1>
                        <p className={styles.subFake}>*As informações fictícias serão públicas dentro da plataforma e deverão ser utilizadas durante as atividades como medida de segurança.<br />Não forneça suas informações pessoais.<br />(Ex: nome, nomes de amigos ou parentes, endereço residencial e redes socias.)</p>
                        <li className={`${styles.liItens} ${styles.liFakeNameItem}`}>
                            <label htmlFor="fakename" className={`${styles.allLabels} ${styles.NameLabel}`}>Nome Fictício</label>
                            <input className={`${styles.inputName} ${styles.inputAll}`} id="fakename" type="text" value={fakeName} name='fakename' onChange={e => { setFakeName(e.target.value) }} placeholder="Digite o seu pseudônimo" />
                        </li>
                    </div>
                </div>
                <div className={styles.agenda_container}>
                    <h1 className={styles.agenda_tittle}>Dias da semana e horários disponíveis para execução dos desafios</h1>
                    <p className={styles.agenda_sub}>*</p>
                </div>
                <Schaduale />

                <button className={styles.btn_signUp}>Continuar</button>
            </main>

            <Footer />
        </>


    )
}

export default SignUp;

export async function getStaticProps() {

    const res = await fetch('https://restcountries.com/v3.1/all')
    const list = await res.json()

    return {
        props: {
            list
        },
    }
}
