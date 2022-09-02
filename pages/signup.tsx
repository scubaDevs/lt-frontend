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
import { IdValueType } from '../types/types';


type PropsName = {
    list: any[]
}


//Início do componente

const SignUp = ({ list }: PropsName) => {





    //Início das declarações de variáveis

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_Password, setConfirm_Password] = useState('');
    const [fakeName, setFakeName] = useState('');


    //Constantes que guardam states de Schaduale

    const [clickedButton, setClickedButton] = useState('')
    const [checkedItemSeg, setCheckedItemSeg] = useState<Array<IdValueType>>([])
    const [checkedItemTer, setCheckedItemTer] = useState<Array<IdValueType>>([])
    const [checkedItemQua, setCheckedItemQua] = useState<Array<IdValueType>>([])
    const [checkedItemQui, setCheckedItemQui] = useState<Array<IdValueType>>([])
    const [checkedItemSex, setCheckedItemSex] = useState<Array<IdValueType>>([])
    const [checkedItemSab, setCheckedItemSab] = useState<Array<IdValueType>>([])

    //Constantes que guardam states de LiInputRadio

    const [level, setLevel] = useState('')

    //Constantes que guardam states de CountryPhone

    const [selectedCountry, setSelectedCountry] = useState('Escolha seu País');
    const [phone, setPhone] = useState('');


    const allData: IdValueType[] = [];

    const handleData = () => {


        checkedItemSeg.map((item) => {
            allData.push(item)
        })
        checkedItemTer.map((item) => {
            allData.push(item)
        })
        checkedItemQua.map((item) => {
            allData.push(item)
        })
        checkedItemQui.map((item) => {
            allData.push(item)
        })
        checkedItemSex.map((item) => {
            allData.push(item)
        })
        checkedItemSab.map((item) => {
            allData.push(item)
        })
        allData.sort((a, b) => (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0)


        return
    }


    //--------------------------------

    //Fim das definições das funções

    //Execução de funções

    handleData()

    //Fim das execuções das funções


    //Constantes para o fetch
    const objData = {
        name,
        surname,
        email,
        password,
        fakeName,
        level,
        selectedCountry,
        phone,
        allData: allData
    }








    //Fim das declarações de variáveis

    //Início das definições das funções

    //----------------------------------

    //Função que faz a req Post
    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(JSON.stringify(objData))
        try {
            const res = await fetch('http://localhost:4000/api/', {
                method: 'post',
                headers: {

                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objData)

            })
            const result = res.json();
            console.log("Esta é a resposta: ", result)
        } catch (error) {

            console.log("Este é o erro: ", error)
        };


        return
    }


    //----------------------------------




    //Início do retorno do componente

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
                    <form className={styles.form_container}>
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
                                setP={setPhone}
                                setC={setSelectedCountry}
                                c={selectedCountry}
                                p={phone}
                            />
                            <LiInputRadio
                                setL={setLevel}
                            />


                        </ul>
                    </form>

                    <div>
                        <h1 className={styles.tittleFake}>Perfil Fictício</h1>
                        <p className={styles.subFake}>*As informações fictícias serão públicas dentro da plataforma e deverão ser utilizadas durante as atividades como medida de segurança.<br />Não forneça suas informações pessoais.<br />(Ex: nome, nomes de amigos ou parentes, endereço residencial e redes socias.)</p>
                        <li className={`${styles.liItens} ${styles.liFakeNameItem}`}>
                            <label htmlFor="fakename" className={`${styles.allLabels} ${styles.NameLabel}`}>Nome Fictício</label>
                            <input className={`${styles.inputName} ${styles.inputAll}`} id="fakename" type="text" value={fakeName} name='fakename' onChange={e => { setFakeName(e.target.value) }} placeholder="Digite o seu pseudônimo" />
                        </li>
                    </div>
                </div>

                <Schaduale
                    day={setClickedButton}
                    dayState={clickedButton}
                    seg={setCheckedItemSeg}
                    segState={checkedItemSeg}
                    ter={setCheckedItemTer}
                    terState={checkedItemTer}
                    qua={setCheckedItemQua}
                    quaState={checkedItemQua}
                    qui={setCheckedItemQui}
                    quiState={checkedItemQui}
                    sex={setCheckedItemSex}
                    sexState={checkedItemSex}
                    sab={setCheckedItemSab}
                    sabState={checkedItemSab}
                />
                <div className={styles.btn_signUp_container}>
                    <button
                        className={styles.btn_signUp}
                        onClick={handleClick}
                    >Enviar</button>
                </div>
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
