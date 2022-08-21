import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import photo_hero from '../public/images/photo_hero.svg'
import register_icon from '../public/register_icon.svg';
import whatsapp_icon from '../public/whatsapp_icon.svg';
import phone_icon from '../public/phone_icon.svg';
import talk_icon from '../public/talk_icon.svg';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      {/* Hero*/}
      <main >
        <section className={styles.container}>
          <span className={styles.mark1} />
          <span className={styles.mark2} />
          <div className={styles.hero_container}>
            <h1 className={styles.tittle}>Torne-se <span className={styles.text_purple}>fluente na<br />
              língua inglesa</span> em um<br />
              ambiente<span className={styles.text_purple}> imersivo,<br />
                desafiador e colaborativo.</span><br />
            </h1>
            <h2 className={styles.text_sub}>

              Realize desafios e aprimore sua fala, escrita e
              entendimento de forma interativa e dinâmica.<br />Junte-se a
              milhares de pessoas que são capazes de se comunicar
              fluentemente em inglês todos os dias.
            </h2>
            <Link href='/signup' passHref >
              <button className={styles.btn_hero}>Quero me cadastrar agora.</button>
            </Link>
          </div>
          <div className={styles.photo_hero}>
            <Image
              src={photo_hero}
            />
          </div>
        </section>
        {/* How it work*/}
        <section >
          <div className={styles.how_it_work_container}>
            <h1 className={styles.hiw_tittle}><a id='hiw'  >Como Funciona</a> </h1>
            <div className={styles.cards_container}>
              <div className={styles.card}>
                <div>
                  <Image
                    width={50}
                    height={50}
                    src={register_icon}
                  />
                </div>
                <h1 className={styles.card_tittle}>
                  Escolha um desafio
                </h1>
                <p className={styles.card_paragraph}>
                  Cadastre-se e escolha um desafio de seu interesse e compatível com seus objetivos
                </p>
              </div>
              <div className={styles.card}>
                <div>
                  <Image
                    width={45}
                    height={45}
                    src={whatsapp_icon}
                  />
                </div>
                <h1 className={styles.card_tittle}>
                  Agende uma reunião
                </h1>
                <p className={styles.card_paragraph}>
                  Agende uma 'call' via whatsapp com seu colega de desafio no horário mais conveniente
                </p>
              </div>
              <div className={styles.card}>
                <div>
                  <Image
                    width={45}
                    height={45}
                    src={phone_icon}
                  />
                </div>
                <h1 className={styles.card_tittle}>
                  Execute as tarefas
                </h1>
                <p className={styles.card_paragraph}>
                  Execute as tarefas na reunião, enquanto conversa em inglês com seu colega de desafio
                </p>
              </div>
              <div className={styles.card}>
                <div>
                  <Image
                    width={50}
                    height={50}
                    src={talk_icon}
                  />
                </div>
                <h1 className={styles.card_tittle}>
                  Deixe um feedback
                </h1>
                <p className={styles.card_paragraph}>
                  Após completar o desafio, deixe um feedback para seus colegas de desafio
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Security Measures*/}
        <section className={styles.sm_container}>

          <h1 className={styles.sm_tittle}>
            Segurança
          </h1>
          <div className={styles.sm_allitens_container}>

            <div className={styles.sm_item_container}>

              <p className={styles.sm_item_text}>A comunicação da <span className={styles.sm_span_text}>luckytalks.com</span> com
                seus usuários é feita <span className={styles.sm_span_text}>exclusivamente através de email.</span>
                Desconfie de ligações ou mensagens em nosso nome.</p>

            </div>
            <div className={styles.sm_item_container}>


              <p className={styles.sm_item_text}><span className={styles.sm_span_text}>Se relacione apenas dentro de nossa plataforma.</span>Não há necessidade de adicionar ou compartilhar com colegas as suas redes sociais.</p>
            </div>
            <div className={styles.sm_item_container}>

              <p className={styles.sm_item_text}><span className={styles.sm_span_text}>Apague o seu verdadeiro nome nas suas configurações do whatsapp</span> antes de compartilhar seu contato.</p>

            </div>
            <div className={styles.sm_item_container}>


              <p className={styles.sm_item_text}><span className={styles.sm_span_text}>Sempre utilize as informações fictícias do seu perfil da Lucky Talks</span> durante a execução das atividades.</p>
            </div>
          </div>
        </section>
      </main>
    </Layout >
  )
}

export default Home
