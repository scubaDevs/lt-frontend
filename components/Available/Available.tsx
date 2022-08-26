import styles from "../Available/Available.module.css";
import { useState } from "react";


type IdValueType = {
    id: number,
    value: string

}



const Available = () => {

    const [checkedItem, setCheckedItem] = useState<Array<IdValueType>>([])

    const handleCheckBoxChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = parseInt(e.target.id);
        const value = e.target.value;
        const obj = { id: id, value: value }

        if (e.target.checked == true) {
            if (checkedItem.find(i => i.value === value)) {
                return
            } else {
                const newList = [...checkedItem];
                newList.push(obj);
                newList.sort()
                setCheckedItem(newList);
                return
            }
        }
        if (e.target.checked == false) {

            if (checkedItem.find(i => i.value === value)) {
                const newList = [...checkedItem]
                newList.splice(newList.findIndex(i => i.id === id), 1)
                setCheckedItem(newList)
                return
            }
        }



        return
    }





    return (
        <div>
            {/*   <div>
                <ul>
                    {
                        checkedItem.map((item, index) => {
                            return <li key={index}>{item.value}</li>
                        })
                    }
                </ul>
            </div> */}
            <div className={styles.ampm}>
                <label htmlFor='1'>6:00 - 7:00</label>
                <input
                    type='checkbox'
                    id='1'
                    name='1'
                    value='6:00 - 7:00'
                    onChange={handleCheckBoxChange}

                />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='2'>10:00 - 11:00</label>
                <input
                    type='checkbox'
                    id='2'
                    name='2'
                    value='10:00 - 11:00'
                    onChange={handleCheckBoxChange}


                />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='3'>14:00 - 15:00</label>
                <input
                    type='checkbox'
                    id='3'
                    name='3'
                    value='14:00 - 15:00'
                    onChange={handleCheckBoxChange}
                />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='4'>18:00 - 19:00</label>
                <input
                    type='checkbox'
                    id='4'
                    name='4'
                    value='18:00 - 19:00'
                    onChange={handleCheckBoxChange}
                />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='5'>22:00 - 23:00</label>
                <input
                    type='checkbox'
                    id='5'
                    name='5'
                    value='22:00 - 23:00'
                    onChange={handleCheckBoxChange}
                />
            </div>
            <div>
                <span></span>
            </div>
            <div className={styles.ampm}>
                <label htmlFor='6'>7:00 - 8:00</label>
                <input
                    type='checkbox'
                    id='6'
                    name='6'
                    value='7:00 - 8:00'
                    onChange={handleCheckBoxChange}
                />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='7'>11:00 - 12:00</label>
                <input
                    type='checkbox'
                    id='7'
                    name='7'
                    value='11:00 - 12:00'
                    onChange={handleCheckBoxChange}
                />
            </div>

            <div className={styles.ampm}>
                <label htmlFor='8'>15:00 - 16:00</label>
                <input
                    type='checkbox'
                    id='8'
                    name='8'
                    value='15:00 - 16:00'
                    onChange={handleCheckBoxChange}
                />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='9'>19:00 - 20:00</label>
                <input
                    type='checkbox'
                    id='9'
                    name='9'
                    value='19:00 - 20:00'
                    onChange={handleCheckBoxChange}
                />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='10'>23:00 - 00:00</label>
                <input
                    type='checkbox'
                    id='10'
                    name='10'
                    value='23:00 - 00:00'
                    onChange={handleCheckBoxChange}
                />
            </div>
            <div>
                <span></span>
            </div>
            <div className={styles.ampm}>
                <label htmlFor='11'>8:00 - 9:00</label>
                <input
                    type='checkbox'
                    id='11'
                    name='11'
                    value='8:00 - 9:00'
                    onChange={handleCheckBoxChange}
                />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='12'>12:00 - 13:00</label>
                <input
                    type='checkbox'
                    id='12'
                    name='12'
                    value='12:00 - 13:00'
                    onChange={handleCheckBoxChange}
                />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='13'>16:00 - 17:00</label>
                <input
                    type='checkbox'
                    id='13'
                    name='13'
                    value='16:00 - 17:00'
                    onChange={handleCheckBoxChange}
                />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='14'>20:00 - 21:00</label>
                <input
                    type='checkbox'
                    id='14'
                    name='14'
                    value='20:00 - 21:00'
                    onChange={handleCheckBoxChange}
                />
            </div>
            <div>
                <span></span>
            </div>
            <div>
                <span></span>
            </div>
            <div className={styles.ampm}>
                <label htmlFor='15'>9:00 - 10:00</label>
                <input
                    type='checkbox'
                    id='15'
                    name='15'
                    value='9:00 - 10:00'
                    onChange={handleCheckBoxChange}
                />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='16'>13:00 - 14:00</label>
                <input
                    type='checkbox'
                    id='16'
                    name='16'
                    value='13:00 - 14:00'
                    onChange={handleCheckBoxChange}
                />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='17'>17:00 - 18:00</label>
                <input
                    type='checkbox'
                    id='17'
                    name='17'
                    value='17:00 - 18:00'
                    onChange={handleCheckBoxChange}
                />
            </div>
            <div className={styles.ampm}>
                <label htmlFor='18'>21:00 - 22:00</label>
                <input
                    type='checkbox'
                    id='18'
                    name='18'
                    value='21:00 - 22:00'
                    onChange={handleCheckBoxChange}
                />
            </div>
            <div>
                <span></span>
            </div>
            <div>
                <span></span>
            </div>
        </div>
    )
}

export { Available };