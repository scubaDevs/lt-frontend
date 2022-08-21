import styles from '../styles/Signup.module.css';
import { Footer } from '../components/Footer';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/betalogo.svg';
import add_image_icon from '../public/add_image_icon.svg';
import React, { InputHTMLAttributes, useState } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    avatarprops: File;
}

const SignUp = ({ avatarprops }: Props) => {

    const [avatar, setAvatar] = useState('')

    /*   const handleAvatar = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
          setAvatar()
      }
   */
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
                        <label htmlFor='avatar' className={styles.label_container}>
                            <input type='file' id='avatar' name='avatar' className={styles.input_avatar} />


                            <div className={styles.img_icon}>
                                <Image
                                    src={add_image_icon}
                                    width={55}
                                    height={55}
                                />
                            </div>
                            <p className={styles.input_text}>Clique para adicionar uma imagem</p>

                        </label>
                    </form>
                </div>
            </main>

            <Footer />
        </>


    )
}

export default SignUp;