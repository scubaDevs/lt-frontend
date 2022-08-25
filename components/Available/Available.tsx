import styles from "../Available/Available.module.css";

const Available = () => {
    return (
        <>
            <div className={styles.ampm}>
                <label htmlFor='1'>6:00 - 7:00</label>
                <input type='checkbox' id='1' name='1' />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='2'>10:00 - 11:00</label>
                <input type='checkbox' id='2' name='2' />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='3'>14:00 - 15:00</label>
                <input type='checkbox' id='3' name='3' />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='4'>18:00 - 19:00</label>
                <input type='checkbox' id='4' name='4' />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='5'>22:00 - 23:00</label>
                <input type='checkbox' id='5' name='5' />
            </div>
            <div>
                <span></span>
            </div>
            <div className={styles.ampm}>
                <label htmlFor='6'>7:00 - 8:00</label>
                <input type='checkbox' id='6' name='6' />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='7'>11:00 - 12:00</label>
                <input type='checkbox' id='7' name='7' />
            </div>

            <div className={styles.ampm}>
                <label htmlFor='8'>15:00 - 16:00</label>
                <input type='checkbox' id='8' name='8' />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='9'>19:00 - 20:00</label>
                <input type='checkbox' id='9' name='9' />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='10'>23:00 - 00:00</label>
                <input type='checkbox' id='10' name='10' />
            </div>
            <div>
                <span></span>
            </div>
            <div className={styles.ampm}>
                <label htmlFor='11'>8:00 - 9:00</label>
                <input type='checkbox' id='11' name='11' />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='12'>12:00 - 13:00</label>
                <input type='checkbox' id='12' name='12' />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='13'>16:00 - 17:00</label>
                <input type='checkbox' id='13' name='13' />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='14'>20:00 - 21:00</label>
                <input type='checkbox' id='14' name='14' />
            </div>
            <div>
                <span></span>
            </div>
            <div>
                <span></span>
            </div>
            <div className={styles.ampm}>
                <label htmlFor='15'>9:00 - 10:00</label>
                <input type='checkbox' id='15' name='15' />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='16'>13:00 - 14:00</label>
                <input type='checkbox' id='16' name='16' />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='17'>17:00 - 18:00</label>
                <input type='checkbox' id='17' name='17' />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='18'>21:00 - 22:00</label>
                <input type='checkbox' id='18' name='18' />
            </div>
            <div>
                <span></span>
            </div>
            <div>
                <span></span>
            </div>
        </>
    )
}

export { Available };