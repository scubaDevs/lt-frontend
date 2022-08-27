import styles from '../Schaduale/Schaduale.module.css';
import React, { useState } from 'react';
import { IdValueType } from '../../types/types';





//Início do Componente

const Schaduale = () => {


    //Constantes que guardam states

    const [clickedButton, setClickedButton] = useState('')
    const [checkedItem, setCheckedItem] = useState<Array<IdValueType>>([])

    /* const [checkedItemSeg, setCheckedItemSeg] = useState<Array<IdValueType>>([])
    const [checkedItemTer, setCheckedItemTer] = useState<Array<IdValueType>>([])
    const [checkedItemQua, setCheckedItemQua] = useState<Array<IdValueType>>([])
    const [checkedItemQui, setCheckedItemQui] = useState<Array<IdValueType>>([])
    const [checkedItemSex, setCheckedItemSex] = useState<Array<IdValueType>>([])
    const [checkedItemSab, setCheckedItemSab] = useState<Array<IdValueType>>([]) */




    //Dias da semana selecionado

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const button: HTMLButtonElement = e.currentTarget;
        return setClickedButton(button.value)
    }



    //Horário disponíveis selecionados

    const handleCheckBoxChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = parseInt(e.target.id);
        const value = e.target.value;
        const name = e.target.name;
        const obj = { id: id, value: value, name: name }

        if (e.target.checked == true) {
            if (checkedItem.find(i => i.value === value)) {
                return
            } else {
                let newList = [...checkedItem];
                newList.push(obj);
                //colocando em ordem crescente com base no valor do id
                newList.sort((a, b) => (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0)
                console.log(newList)
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


    // ***Início do Retorno do Componente***

    return (
        <div className={styles.schaduale_container}>
            <div className={styles.agenda_container}>
                <h1 className={styles.agenda_tittle}>Selecione os dias da semana e horários disponíveis para execução dos desafios</h1>
                <div className={styles.available_container}>
                    <ul>
                        {

                            checkedItem.map((item, index) => {
                                return (
                                    <li className={styles.available} key={index}>{`${item.name} | ${item.value}`}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

            <div className={styles.container}>
                <div>
                    <button
                        value='segunda'
                        onClick={handleClick}
                        className={clickedButton == 'segunda' ? `${styles.day}` : `${styles.allDays}`}
                    >
                        Segunda
                    </button>
                </div>
                <div>
                    <button
                        value='terca'
                        onClick={handleClick}
                        className={clickedButton == 'terca' ? `${styles.day}` : `${styles.allDays}`}
                    >
                        Terça
                    </button>
                </div>
                <div>
                    <button
                        value='quarta'
                        onClick={handleClick}
                        className={clickedButton == 'quarta' ? `${styles.day}` : `${styles.allDays}`}
                    >
                        Quarta
                    </button>
                </div >
                <div>
                    <button
                        value='quinta'
                        onClick={handleClick}
                        className={clickedButton == 'quinta' ? `${styles.day}` : `${styles.allDays}`}
                    >
                        Quinta
                    </button>
                </div>
                <div>
                    <button
                        value='sexta'
                        onClick={handleClick}
                        className={clickedButton == 'sexta' ? `${styles.day}` : `${styles.allDays}`}
                    >
                        Sexta
                    </button>
                </div>
                <div>
                    <button
                        value='sabado'
                        onClick={handleClick}
                        className={clickedButton == 'sabado' ? `${styles.day}` : `${styles.allDays}`}
                    >
                        Sábado
                    </button>
                </div>

                {/* ***Começando os checkbox de Segunda*** */}
                {clickedButton == 'segunda' &&
                    <>
                        <div className={styles.ampm}>
                            <label htmlFor='1'>6:00 - 7:00</label>
                            <input
                                type='checkbox'
                                id='1'
                                name='segunda'
                                value='6:00 - 7:00'
                                onChange={handleCheckBoxChange}
                            /*  checked={handlechacked} */

                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='5'>10:00 - 11:00</label>
                            <input
                                type='checkbox'
                                id='5'
                                name='segunda'
                                value='10:00 - 11:00'
                                onChange={handleCheckBoxChange}


                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='9'>14:00 - 15:00</label>
                            <input
                                type='checkbox'
                                id='9'
                                name='segunda'
                                value='14:00 - 15:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='13'>18:00 - 19:00</label>
                            <input
                                type='checkbox'
                                id='13'
                                name='segunda'
                                value='18:00 - 19:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='17'>22:00 - 23:00</label>
                            <input
                                type='checkbox'
                                id='17'
                                name='segunda'
                                value='22:00 - 23:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div>
                            <span></span>
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='2'>7:00 - 8:00</label>
                            <input
                                type='checkbox'
                                id='2'
                                name='segunda'
                                value='7:00 - 8:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='6'>11:00 - 12:00</label>
                            <input
                                type='checkbox'
                                id='6'
                                name='segunda'
                                value='11:00 - 12:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>

                        <div className={styles.ampm}>
                            <label htmlFor='10'>15:00 - 16:00</label>
                            <input
                                type='checkbox'
                                id='10'
                                name='segunda'
                                value='15:00 - 16:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='14'>19:00 - 20:00</label>
                            <input
                                type='checkbox'
                                id='14'
                                name='segunda'
                                value='19:00 - 20:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='18'>23:00 - 00:00</label>
                            <input
                                type='checkbox'
                                id='18'
                                name='segunda'
                                value='23:00 - 00:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div>
                            <span></span>
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='3'>8:00 - 9:00</label>
                            <input
                                type='checkbox'
                                id='3'
                                name='segunda'
                                value='8:00 - 9:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='7'>12:00 - 13:00</label>
                            <input
                                type='checkbox'
                                id='7'
                                name='segunda'
                                value='12:00 - 13:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='11'>16:00 - 17:00</label>
                            <input
                                type='checkbox'
                                id='11'
                                name='segunda'
                                value='16:00 - 17:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='15'>20:00 - 21:00</label>
                            <input
                                type='checkbox'
                                id='15'
                                name='segunda'
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
                            <label htmlFor='4'>9:00 - 10:00</label>
                            <input
                                type='checkbox'
                                id='4'
                                name='segunda'
                                value='9:00 - 10:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='8'>13:00 - 14:00</label>
                            <input
                                type='checkbox'
                                id='8'
                                name='segunda'
                                value='13:00 - 14:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='12'>17:00 - 18:00</label>
                            <input
                                type='checkbox'
                                id='12'
                                name='segunda'
                                value='17:00 - 18:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='16'>21:00 - 22:00</label>
                            <input
                                type='checkbox'
                                id='16'
                                name='segunda'
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
                    </>}
                {/* ***Começando os checkbox de Terça*** */}
                {clickedButton == 'terca' &&
                    <>
                        <div className={styles.ampm}>
                            <label htmlFor='1'>6:00 - 7:00</label>
                            <input
                                type='checkbox'
                                id='1'
                                name='terca'
                                value='6:00 - 7:00'
                                onChange={handleCheckBoxChange}
                            /*  checked={handlechacked} */

                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='5'>10:00 - 11:00</label>
                            <input
                                type='checkbox'
                                id='5'
                                name='terca'
                                value='10:00 - 11:00'
                                onChange={handleCheckBoxChange}


                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='9'>14:00 - 15:00</label>
                            <input
                                type='checkbox'
                                id='9'
                                name='terca'
                                value='14:00 - 15:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='13'>18:00 - 19:00</label>
                            <input
                                type='checkbox'
                                id='13'
                                name='terca'
                                value='18:00 - 19:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='17'>22:00 - 23:00</label>
                            <input
                                type='checkbox'
                                id='17'
                                name='terca'
                                value='22:00 - 23:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div>
                            <span></span>
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='2'>7:00 - 8:00</label>
                            <input
                                type='checkbox'
                                id='2'
                                name='terca'
                                value='7:00 - 8:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='6'>11:00 - 12:00</label>
                            <input
                                type='checkbox'
                                id='6'
                                name='terca'
                                value='11:00 - 12:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>

                        <div className={styles.ampm}>
                            <label htmlFor='10'>15:00 - 16:00</label>
                            <input
                                type='checkbox'
                                id='10'
                                name='terca'
                                value='15:00 - 16:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='14'>19:00 - 20:00</label>
                            <input
                                type='checkbox'
                                id='14'
                                name='terca'
                                value='19:00 - 20:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='18'>23:00 - 00:00</label>
                            <input
                                type='checkbox'
                                id='18'
                                name='terca'
                                value='23:00 - 00:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div>
                            <span></span>
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='3'>8:00 - 9:00</label>
                            <input
                                type='checkbox'
                                id='3'
                                name='terca'
                                value='8:00 - 9:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='7'>12:00 - 13:00</label>
                            <input
                                type='checkbox'
                                id='7'
                                name='terca'
                                value='12:00 - 13:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='11'>16:00 - 17:00</label>
                            <input
                                type='checkbox'
                                id='11'
                                name='terca'
                                value='16:00 - 17:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='15'>20:00 - 21:00</label>
                            <input
                                type='checkbox'
                                id='15'
                                name='terca'
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
                            <label htmlFor='4'>9:00 - 10:00</label>
                            <input
                                type='checkbox'
                                id='4'
                                name='terca'
                                value='9:00 - 10:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='8'>13:00 - 14:00</label>
                            <input
                                type='checkbox'
                                id='8'
                                name='terca'
                                value='13:00 - 14:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='12'>17:00 - 18:00</label>
                            <input
                                type='checkbox'
                                id='12'
                                name='terca'
                                value='17:00 - 18:00'
                                onChange={handleCheckBoxChange}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='16'>21:00 - 22:00</label>
                            <input
                                type='checkbox'
                                id='16'
                                name='terca'
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
                    </>}
                <button className={styles.btn_signUp}>Continuar</button>
            </div>

        </div>

    )
}

export { Schaduale };