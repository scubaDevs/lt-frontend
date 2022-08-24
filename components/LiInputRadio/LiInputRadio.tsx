import styles from '../LiInputRadio/LiInputRadio.module.css';
import { useState } from 'react';



const LiInputRadio = () => {

    const [level, setLevel] = useState('')



    return (
        <>

            <li className={`${styles.basic_container} ${styles.liRadio}`}>
                <p className={styles.tittle}>Selecione o seu nível de inglês</p>
                <div className={`${styles.input_container}`}>
                    <label htmlFor="basic" className={`${styles.basicLevel}`}>Básico</label>
                    <input className={` ${styles.inputRadio}`} id="basic" type="radio" value='basic' name='radio' onChange={e => { setLevel(e.target.value) }} />
                </div>
                <div className={`${styles.input_container}`}>
                    <label htmlFor="intermediate" className={`${styles.basicLevel}`}>Intermediário</label>
                    <input className={` ${styles.inputRadio}`} id="intermediate" type="radio" value='intermediate' name='radio' onChange={e => { setLevel(e.target.value) }} />
                </div>
                <div className={`${styles.input_container}`}>
                    <label htmlFor="advanced" className={`${styles.basicLevel} `}>Avançado</label>
                    <input className={`${styles.inputRadio}`} id="advanced" type="radio" value='advanced' name='radio' onChange={e => { setLevel(e.target.value) }} />
                </div>

            </li>

        </>
    )
}

export { LiInputRadio };