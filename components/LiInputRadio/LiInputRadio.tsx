import styles from '../LiInputRadio/LiInputRadio.module.css';
import { ChangeEvent, SetStateAction, useState } from 'react';


type Props = {

    setL: React.Dispatch<SetStateAction<string>>;
}

const LiInputRadio = ({ setL }: Props) => {



    const handleChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {

        setL(e.target.value)
        return

    }



    return (
        <>

            <li className={`${styles.basic_container} ${styles.liRadio}`}>
                <p className={styles.tittle}>Selecione o seu nível de inglês</p>
                <div className={`${styles.input_container}`}>
                    <label htmlFor="basic" className={`${styles.basicLevel}`}>Básico</label>
                    <input className={` ${styles.inputRadio}`} id="basic" type="radio" value='basic' name='radio' onChange={handleChangeRadio} />
                </div>
                <div className={`${styles.input_container}`}>
                    <label htmlFor="intermediate" className={`${styles.basicLevel}`}>Intermediário</label>
                    <input className={` ${styles.inputRadio}`} id="intermediate" type="radio" value='intermediate' name='radio' onChange={handleChangeRadio} />
                </div>
                <div className={`${styles.input_container}`}>
                    <label htmlFor="advanced" className={`${styles.basicLevel} `}>Avançado</label>
                    <input className={`${styles.inputRadio}`} id="advanced" type="radio" value='advanced' name='radio' onChange={handleChangeRadio} />
                </div>

            </li>

        </>
    )
}

export { LiInputRadio };