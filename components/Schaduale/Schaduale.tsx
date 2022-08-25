import styles from '../Schaduale/Schaduale.module.css';
import React, { useState } from 'react';
import { Available } from '../Available/Available';

const Schaduale = () => {


    const [clickedButton, setClickedButton] = useState('')


    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const button: HTMLButtonElement = e.currentTarget;
        setClickedButton(button.value)
    }

    return (
        <div className={styles.container}>
            <div>
                <button value='monday' onClick={handleClick} className={`${styles.allDays} ${styles.segunda}`}>Segunda</button>
            </div>
            <div>
                <button value='tuesday' onClick={handleClick} className={`${styles.allDays} ${styles.terca}`}>Terça</button>
            </div>
            <div>
                <button value='wednesday' onClick={handleClick} className={`${styles.allDays} ${styles.quarta}`}>Quarta</button>
            </div >
            <div>
                <button value='thursday' onClick={handleClick} className={`${styles.allDays} ${styles.quinta}`}>Quinta</button>
            </div>
            <div>
                <button value='friday' onClick={handleClick} className={`${styles.allDays} ${styles.sexta}`}>Sexta</button>
            </div>
            <div>
                <button value='saturday' onClick={handleClick} className={`${styles.allDays} ${styles.sabado}`}>Sábado</button>
            </div>
            <Available />
        </div >

    )
}

export { Schaduale };