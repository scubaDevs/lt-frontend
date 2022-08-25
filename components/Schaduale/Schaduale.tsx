import styles from '../Schaduale/Schaduale.module.css';
import React, { useState } from 'react';

const Schaduale = () => {


    const [clickedButton, setClickedButton] = useState('')


    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const button: HTMLButtonElement = e.currentTarget;
        setClickedButton(button.value)
        console.log(clickedButton)

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

            <div className={styles.ampm}>
                <label htmlFor='1'>6:00 - 7:00</label>
                <input type='checkbox' id='1' name='1' className={styles.am} />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='2'>10:00 - 11:00</label>
                <input type='checkbox' id='2' name='2' className={styles.am} />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='3'>14:00 - 15:00</label>
                <input type='checkbox' id='3' name='3' className={styles.am} />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='4'>18:00 - 19:00</label>
                <input type='checkbox' id='4' name='4' className={styles.am} />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='5'>22:00 - 23:00</label>
                <input type='checkbox' id='5' name='5' className={styles.am} />
            </div>
            <div>
                <span></span>
            </div>
            <div className={styles.ampm}>
                <label htmlFor='6'>7:00 - 8:00</label>
                <input type='checkbox' id='6' name='6' className={styles.am} />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='7'>11:00 - 12:00</label>
                <input type='checkbox' id='7' name='7' className={styles.am} />
            </div>

            <div className={styles.ampm}>
                <label htmlFor='8'>15:00 - 16:00</label>
                <input type='checkbox' id='8' name='8' className={styles.am} />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='9'>19:00 - 20:00</label>
                <input type='checkbox' id='9' name='9' className={styles.am} />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='10'>23:00 - 00:00</label>
                <input type='checkbox' id='10' name='10' className={styles.am} />
            </div>
            <div>
                <span></span>
            </div>
            <div className={styles.ampm}>
                <label htmlFor='11'>8:00 - 9:00</label>
                <input type='checkbox' id='11' name='11' className={styles.am} />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='12'>12:00 - 13:00</label>
                <input type='checkbox' id='12' name='12' className={styles.am} />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='13'>16:00 - 17:00</label>
                <input type='checkbox' id='13' name='13' className={styles.am} />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='14'>20:00 - 21:00</label>
                <input type='checkbox' id='14' name='14' className={styles.am} />
            </div>
            <div>
                <span></span>
            </div>
            <div>
                <span></span>
            </div>
            <div className={styles.ampm}>
                <label htmlFor='15'>9:00 - 10:00</label>
                <input type='checkbox' id='15' name='15' className={styles.am} />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='16'>13:00 - 14:00</label>
                <input type='checkbox' id='16' name='16' className={styles.am} />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='17'>17:00 - 18:00</label>
                <input type='checkbox' id='17' name='17' className={styles.am} />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='18'>21:00 - 22:00</label>
                <input type='checkbox' id='18' name='18' className={styles.am} />
            </div>
            <div>
                <span></span>
            </div>
            <div>
                <span></span>
            </div>

        </div >

    )
}

export { Schaduale };