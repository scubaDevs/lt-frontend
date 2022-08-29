import styles from '../Schaduale/Schaduale.module.css';
import React, { useState } from 'react';
import { IdValueType } from '../../types/types';






//Início do Componente

const Schaduale = () => {


    //Constantes que guardam states

    const [clickedButton, setClickedButton] = useState('')


    const [checkedItemSeg, setCheckedItemSeg] = useState<Array<IdValueType>>([])
    const [checkedItemTer, setCheckedItemTer] = useState<Array<IdValueType>>([])
    const [checkedItemQua, setCheckedItemQua] = useState<Array<IdValueType>>([])
    const [checkedItemQui, setCheckedItemQui] = useState<Array<IdValueType>>([])
    const [checkedItemSex, setCheckedItemSex] = useState<Array<IdValueType>>([])
    const [checkedItemSab, setCheckedItemSab] = useState<Array<IdValueType>>([])




    //Dias da semana selecionado

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const button: HTMLButtonElement = e.currentTarget;
        return setClickedButton(button.value)
    }

    //Botão que desmarca um horário selecionado na segunda
    const handleClearBtnSeg = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const clear: HTMLButtonElement = e.currentTarget;
        const id = parseInt(clear.id);
        let list = [...checkedItemSeg];
        console.log(list.splice(list.findIndex(i => i.id === id), 1))
        setCheckedItemSeg(list);
        return


    }
    console.log("Esse é console de SEGUNDA: ", checkedItemSeg)

    //Botão que desmarca um horário selecionado na Terça
    const handleClearBtnTer = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const clear: HTMLButtonElement = e.currentTarget;
        const id = parseInt(clear.id);
        let list = [...checkedItemTer];
        list.splice(list.findIndex(i => i.id === id), 1)
        setCheckedItemTer(list)
        return
    }

    console.log("Esse é console de TERÇA: ", checkedItemTer)
    //Botão que desmarca um horário selecionado na Quarta
    const handleClearBtnQua = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const clear: HTMLButtonElement = e.currentTarget;
        const id = parseInt(clear.id);
        let list = [...checkedItemQua];
        list.splice(list.findIndex(i => i.id === id), 1)
        setCheckedItemQua(list)
        return
    }

    console.log("Esse é console de QUARTA: ", checkedItemQua)
    //Botão que desmarca um horário selecionado na Quinta
    const handleClearBtnQui = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const clear: HTMLButtonElement = e.currentTarget;
        const id = parseInt(clear.id);
        let list = [...checkedItemQui];
        list.splice(list.findIndex(i => i.id === id), 1)
        setCheckedItemQui(list)
    }
    console.log("Esse é console de QUINTA: ", checkedItemQui)
    //Botão que desmarca um horário selecionado na sexta
    const handleClearBtnSex = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const clear: HTMLButtonElement = e.currentTarget;
        const id = parseInt(clear.id);
        let list = [...checkedItemSex];
        list.splice(list.findIndex(i => i.id === id), 1)
        setCheckedItemSex(list)
    }
    console.log("Esse é console de SEXTA: ", checkedItemSex)
    //Botão que desmarca um horário selecionado no Sábado
    const handleClearBtnSab = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const clear: HTMLButtonElement = e.currentTarget;
        const id = parseInt(clear.id);
        let list = [...checkedItemSab];
        list.splice(list.findIndex(i => i.id === id), 1)
        setCheckedItemSab(list)
    }
    console.log("Esse é console de Sabado: ", checkedItemSab)




    //Horário disponíveis selecionados com base nos dias da semana

    //Segunda-Feira

    const handleCheckBoxChangeSeg = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = parseInt(e.target.id);
        const value = e.target.value;
        const name = e.target.name;
        const obj = { id: id, value: value, name: name }

        if (e.target.checked == true) {
            if (checkedItemSeg.find(i => i.value === value)) {
                return
            } else {
                let newList = [...checkedItemSeg];
                newList.push(obj);
                //colocando em ordem crescente com base no valor do id
                newList.sort((a, b) => (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0)
                console.log(newList)
                setCheckedItemSeg(newList);
                return
            }
        }
        if (e.target.checked == false) {

            if (checkedItemSeg.find(i => i.value === value)) {
                const newList = [...checkedItemSeg]
                newList.splice(newList.findIndex(i => i.id === id), 1)
                console.log(newList)
                setCheckedItemSeg(newList)
                return
            }
        }

        return
    }

    //Terça-Feira

    const handleCheckBoxChangeTer = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = parseInt(e.target.id);
        const value = e.target.value;
        const name = e.target.name;
        const obj = { id: id, value: value, name: name }



        if (e.target.checked == true) {
            if (checkedItemTer.find(i => i.value === value)) {
                return
            } else {
                let newList = [...checkedItemTer];
                newList.push(obj);
                //colocando em ordem crescente com base no valor do id
                newList.sort((a, b) => (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0)
                console.log(newList)
                setCheckedItemTer(newList);
                return
            }
        }
        if (e.target.checked == false) {

            if (checkedItemTer.find(i => i.value === value)) {
                const newList = [...checkedItemTer]
                newList.splice(newList.findIndex(i => i.id === id), 1)
                setCheckedItemTer(newList)
                return
            }
        }

        return
    }

    //Quarta-Feira

    const handleCheckBoxChangeQua = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = parseInt(e.target.id);
        const value = e.target.value;
        const name = e.target.name;
        const obj = { id: id, value: value, name: name }

        if (e.target.checked == true) {
            if (checkedItemQua.find(i => i.value === value)) {
                return
            } else {
                let newList = [...checkedItemQua];
                newList.push(obj);
                //colocando em ordem crescente com base no valor do id
                newList.sort((a, b) => (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0)
                console.log(newList)
                setCheckedItemQua(newList);
                return
            }
        }
        if (e.target.checked == false) {

            if (checkedItemQua.find(i => i.value === value)) {
                const newList = [...checkedItemQua]
                newList.splice(newList.findIndex(i => i.id === id), 1)
                setCheckedItemQua(newList)
                return
            }
        }

        return
    }

    //Quinta-Feira

    const handleCheckBoxChangeQui = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = parseInt(e.target.id);
        const value = e.target.value;
        const name = e.target.name;
        const obj = { id: id, value: value, name: name }

        if (e.target.checked == true) {
            if (checkedItemQui.find(i => i.value === value)) {
                return
            } else {
                let newList = [...checkedItemQui];
                newList.push(obj);
                //colocando em ordem crescente com base no valor do id
                newList.sort((a, b) => (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0)
                console.log(newList)
                setCheckedItemQui(newList);
                return
            }
        }
        if (e.target.checked == false) {

            if (checkedItemQui.find(i => i.value === value)) {
                const newList = [...checkedItemQui]
                newList.splice(newList.findIndex(i => i.id === id), 1)
                setCheckedItemQui(newList)
                return
            }
        }

        return
    }

    //Sexta-Feira

    const handleCheckBoxChangeSex = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = parseInt(e.target.id);
        const value = e.target.value;
        const name = e.target.name;
        const obj = { id: id, value: value, name: name }

        if (e.target.checked == true) {
            if (checkedItemSex.find(i => i.value === value)) {
                return
            } else {
                let newList = [...checkedItemSex];
                newList.push(obj);
                //colocando em ordem crescente com base no valor do id
                newList.sort((a, b) => (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0)
                console.log(newList)
                setCheckedItemSex(newList);
                return
            }
        }
        if (e.target.checked == false) {

            if (checkedItemSex.find(i => i.value === value)) {
                const newList = [...checkedItemSex]
                newList.splice(newList.findIndex(i => i.id === id), 1)
                setCheckedItemSex(newList)
                return
            }
        }

        return
    }

    //Sábado

    const handleCheckBoxChangeSab = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = parseInt(e.target.id);
        const value = e.target.value;
        const name = e.target.name;
        const obj = { id: id, value: value, name: name }

        if (e.target.checked == true) {
            if (checkedItemSab.find(i => i.value === value)) {
                return
            } else {
                let newList = [...checkedItemSab];
                newList.push(obj);
                //colocando em ordem crescente com base no valor do id
                newList.sort((a, b) => (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0)
                setCheckedItemSab(newList);
                return
            }
        }
        if (e.target.checked == false) {

            if (checkedItemSab.find(i => i.value === value)) {
                const newList = [...checkedItemSab]
                newList.splice(newList.findIndex(i => i.id === id), 1)
                setCheckedItemSab(newList)
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
                        {checkedItemSeg[0] && <h1 className={styles.availableTittle}>Segunda</h1>}
                        {
                            checkedItemSeg.map((item, index) => {
                                return (
                                    <li className={styles.available} key={index}>{`${item.value}`} <button id={`${item.id}`} className={styles.clearItem} onClick={handleClearBtnSeg}>X</button></li>
                                )
                            })}

                    </ul>
                    <ul>

                        {checkedItemTer[0] && <h1 className={styles.availableTittle}>Terça</h1>}
                        {checkedItemTer.map((item, index) => {
                            return (
                                <li className={styles.available} key={index}>{` ${item.value}`}<button id={`${item.id}`} className={styles.clearItem} onClick={handleClearBtnTer}>X</button></li>
                            )
                        })}

                    </ul>
                    <ul>

                        {checkedItemQua[0] && <h1 className={styles.availableTittle}>Quarta</h1>}
                        {checkedItemQua.map((item, index) => {
                            return (
                                <li className={styles.available} key={index}>{` ${item.value}`}<button id={`${item.id}`} className={styles.clearItem} onClick={handleClearBtnQua}>X</button></li>
                            )
                        })}

                    </ul>
                    <ul>

                        {checkedItemQui[0] && <h1 className={styles.availableTittle}>Quinta</h1>}
                        {checkedItemQui.map((item, index) => {
                            return (
                                <li className={styles.available} key={index}>{` ${item.value}`}<button id={`${item.id}`} className={styles.clearItem} onClick={handleClearBtnQui}>X</button></li>
                            )
                        })}

                    </ul>
                    <ul>

                        {checkedItemSex[0] && <h1 className={styles.availableTittle}>Sexta</h1>}
                        {checkedItemSex.map((item, index) => {
                            return (
                                <li className={styles.available} key={index}>{` ${item.value}`}<button id={`${item.id}`} className={styles.clearItem} onClick={handleClearBtnSex}>X</button></li>
                            )
                        })}

                    </ul>
                    <ul>

                        {checkedItemSab[0] && <h1 className={styles.availableTittle}>Sábado</h1>}
                        {checkedItemSab.map((item, index) => {
                            return (
                                <li className={styles.available} key={index}>{` ${item.value}`}<button id={`${item.id}`} className={styles.clearItem} onClick={handleClearBtnSab}>X</button></li>
                            )
                        })}

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
                                onChange={handleCheckBoxChangeSeg}
                                checked={(checkedItemSeg.find(i => i.id === 1)) ? true : false}

                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='5'>10:00 - 11:00</label>
                            <input
                                type='checkbox'
                                id='5'
                                name='segunda'
                                value='10:00 - 11:00'
                                onChange={handleCheckBoxChangeSeg}
                                checked={(checkedItemSeg.find(i => i.id === 5)) ? true : false}


                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='9'>14:00 - 15:00</label>
                            <input
                                type='checkbox'
                                id='9'
                                name='segunda'
                                value='14:00 - 15:00'
                                onChange={handleCheckBoxChangeSeg}
                                checked={(checkedItemSeg.find(i => i.id === 9)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='13'>18:00 - 19:00</label>
                            <input
                                type='checkbox'
                                id='13'
                                name='segunda'
                                value='18:00 - 19:00'
                                onChange={handleCheckBoxChangeSeg}
                                checked={(checkedItemSeg.find(i => i.id === 13)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='17'>22:00 - 23:00</label>
                            <input
                                type='checkbox'
                                id='17'
                                name='segunda'
                                value='22:00 - 23:00'
                                onChange={handleCheckBoxChangeSeg}
                                checked={(checkedItemSeg.find(i => i.id === 17)) ? true : false}
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
                                onChange={handleCheckBoxChangeSeg}
                                checked={(checkedItemSeg.find(i => i.id === 2)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='6'>11:00 - 12:00</label>
                            <input
                                type='checkbox'
                                id='6'
                                name='segunda'
                                value='11:00 - 12:00'
                                onChange={handleCheckBoxChangeSeg}
                                checked={(checkedItemSeg.find(i => i.id === 6)) ? true : false}
                            />
                        </div>

                        <div className={styles.ampm}>
                            <label htmlFor='10'>15:00 - 16:00</label>
                            <input
                                type='checkbox'
                                id='10'
                                name='segunda'
                                value='15:00 - 16:00'
                                onChange={handleCheckBoxChangeSeg}
                                checked={(checkedItemSeg.find(i => i.id === 10)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='14'>19:00 - 20:00</label>
                            <input
                                type='checkbox'
                                id='14'
                                name='segunda'
                                value='19:00 - 20:00'
                                onChange={handleCheckBoxChangeSeg}
                                checked={(checkedItemSeg.find(i => i.id === 14)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='18'>23:00 - 00:00</label>
                            <input
                                type='checkbox'
                                id='18'
                                name='segunda'
                                value='23:00 - 00:00'
                                onChange={handleCheckBoxChangeSeg}
                                checked={(checkedItemSeg.find(i => i.id === 18)) ? true : false}
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
                                onChange={handleCheckBoxChangeSeg}
                                checked={(checkedItemSeg.find(i => i.id === 3)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='7'>12:00 - 13:00</label>
                            <input
                                type='checkbox'
                                id='7'
                                name='segunda'
                                value='12:00 - 13:00'
                                onChange={handleCheckBoxChangeSeg}
                                checked={(checkedItemSeg.find(i => i.id === 7)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='11'>16:00 - 17:00</label>
                            <input
                                type='checkbox'
                                id='11'
                                name='segunda'
                                value='16:00 - 17:00'
                                onChange={handleCheckBoxChangeSeg}
                                checked={(checkedItemSeg.find(i => i.id === 11)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='15'>20:00 - 21:00</label>
                            <input
                                type='checkbox'
                                id='15'
                                name='segunda'
                                value='20:00 - 21:00'
                                onChange={handleCheckBoxChangeSeg}
                                checked={(checkedItemSeg.find(i => i.id === 15)) ? true : false}
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
                                onChange={handleCheckBoxChangeSeg}
                                checked={(checkedItemSeg.find(i => i.id === 4)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='8'>13:00 - 14:00</label>
                            <input
                                type='checkbox'
                                id='8'
                                name='segunda'
                                value='13:00 - 14:00'
                                onChange={handleCheckBoxChangeSeg}
                                checked={(checkedItemSeg.find(i => i.id === 8)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='12'>17:00 - 18:00</label>
                            <input
                                type='checkbox'
                                id='12'
                                name='segunda'
                                value='17:00 - 18:00'
                                onChange={handleCheckBoxChangeSeg}
                                checked={(checkedItemSeg.find(i => i.id === 12)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='16'>21:00 - 22:00</label>
                            <input
                                type='checkbox'
                                id='16'
                                name='segunda'
                                value='21:00 - 22:00'
                                onChange={handleCheckBoxChangeSeg}
                                checked={(checkedItemSeg.find(i => i.id === 16)) ? true : false}
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
                                onChange={handleCheckBoxChangeTer}
                                checked={(checkedItemTer.find(i => i.id === 1)) ? true : false}

                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='5'>10:00 - 11:00</label>
                            <input
                                type='checkbox'
                                id='5'
                                name='terca'
                                value='10:00 - 11:00'
                                onChange={handleCheckBoxChangeTer}
                                checked={(checkedItemTer.find(i => i.id === 5)) ? true : false}


                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='9'>14:00 - 15:00</label>
                            <input
                                type='checkbox'
                                id='9'
                                name='terca'
                                value='14:00 - 15:00'
                                onChange={handleCheckBoxChangeTer}
                                checked={(checkedItemTer.find(i => i.id === 9)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='13'>18:00 - 19:00</label>
                            <input
                                type='checkbox'
                                id='13'
                                name='terca'
                                value='18:00 - 19:00'
                                onChange={handleCheckBoxChangeTer}
                                checked={(checkedItemTer.find(i => i.id === 13)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='17'>22:00 - 23:00</label>
                            <input
                                type='checkbox'
                                id='17'
                                name='terca'
                                value='22:00 - 23:00'
                                onChange={handleCheckBoxChangeTer}
                                checked={(checkedItemTer.find(i => i.id === 17)) ? true : false}
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
                                onChange={handleCheckBoxChangeTer}
                                checked={(checkedItemTer.find(i => i.id === 2)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='6'>11:00 - 12:00</label>
                            <input
                                type='checkbox'
                                id='6'
                                name='terca'
                                value='11:00 - 12:00'
                                onChange={handleCheckBoxChangeTer}
                                checked={(checkedItemTer.find(i => i.id === 6)) ? true : false}
                            />
                        </div>

                        <div className={styles.ampm}>
                            <label htmlFor='10'>15:00 - 16:00</label>
                            <input
                                type='checkbox'
                                id='10'
                                name='terca'
                                value='15:00 - 16:00'
                                onChange={handleCheckBoxChangeTer}
                                checked={(checkedItemTer.find(i => i.id === 10)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='14'>19:00 - 20:00</label>
                            <input
                                type='checkbox'
                                id='14'
                                name='terca'
                                value='19:00 - 20:00'
                                onChange={handleCheckBoxChangeTer}
                                checked={(checkedItemTer.find(i => i.id === 14)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='18'>23:00 - 00:00</label>
                            <input
                                type='checkbox'
                                id='18'
                                name='terca'
                                value='23:00 - 00:00'
                                onChange={handleCheckBoxChangeTer}
                                checked={(checkedItemTer.find(i => i.id === 18)) ? true : false}
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
                                onChange={handleCheckBoxChangeTer}
                                checked={(checkedItemTer.find(i => i.id === 3)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='7'>12:00 - 13:00</label>
                            <input
                                type='checkbox'
                                id='7'
                                name='terca'
                                value='12:00 - 13:00'
                                onChange={handleCheckBoxChangeTer}
                                checked={(checkedItemTer.find(i => i.id === 7)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='11'>16:00 - 17:00</label>
                            <input
                                type='checkbox'
                                id='11'
                                name='terca'
                                value='16:00 - 17:00'
                                onChange={handleCheckBoxChangeTer}
                                checked={(checkedItemTer.find(i => i.id === 11)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='15'>20:00 - 21:00</label>
                            <input
                                type='checkbox'
                                id='15'
                                name='terca'
                                value='20:00 - 21:00'
                                onChange={handleCheckBoxChangeTer}
                                checked={(checkedItemTer.find(i => i.id === 15)) ? true : false}
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
                                onChange={handleCheckBoxChangeTer}
                                checked={(checkedItemTer.find(i => i.id === 4)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='8'>13:00 - 14:00</label>
                            <input
                                type='checkbox'
                                id='8'
                                name='terca'
                                value='13:00 - 14:00'
                                onChange={handleCheckBoxChangeTer}
                                checked={(checkedItemTer.find(i => i.id === 8)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='12'>17:00 - 18:00</label>
                            <input
                                type='checkbox'
                                id='12'
                                name='terca'
                                value='17:00 - 18:00'
                                onChange={handleCheckBoxChangeTer}
                                checked={(checkedItemTer.find(i => i.id === 12)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='16'>21:00 - 22:00</label>
                            <input
                                type='checkbox'
                                id='16'
                                name='terca'
                                value='21:00 - 22:00'
                                onChange={handleCheckBoxChangeTer}
                                checked={(checkedItemTer.find(i => i.id === 16)) ? true : false}
                            />
                        </div>
                        <div>
                            <span></span>
                        </div>
                        <div>
                            <span></span>
                        </div>
                    </>}



                {/* ***Começando os checkbox de Quarta*** */}



                {clickedButton == 'quarta' &&
                    <>
                        <div className={styles.ampm}>
                            <label htmlFor='1'>6:00 - 7:00</label>
                            <input
                                type='checkbox'
                                id='1'
                                name='quarta'
                                value='6:00 - 7:00'
                                onChange={handleCheckBoxChangeQua}
                                checked={(checkedItemQua.find(i => i.id === 1)) ? true : false}

                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='5'>10:00 - 11:00</label>
                            <input
                                type='checkbox'
                                id='5'
                                name='quarta'
                                value='10:00 - 11:00'
                                onChange={handleCheckBoxChangeQua}
                                checked={(checkedItemQua.find(i => i.id === 5)) ? true : false}


                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='9'>14:00 - 15:00</label>
                            <input
                                type='checkbox'
                                id='9'
                                name='quarta'
                                value='14:00 - 15:00'
                                onChange={handleCheckBoxChangeQua}
                                checked={(checkedItemQua.find(i => i.id === 9)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='13'>18:00 - 19:00</label>
                            <input
                                type='checkbox'
                                id='13'
                                name='quarta'
                                value='18:00 - 19:00'
                                onChange={handleCheckBoxChangeQua}
                                checked={(checkedItemQua.find(i => i.id === 13)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='17'>22:00 - 23:00</label>
                            <input
                                type='checkbox'
                                id='17'
                                name='quarta'
                                value='22:00 - 23:00'
                                onChange={handleCheckBoxChangeQua}
                                checked={(checkedItemQua.find(i => i.id === 17)) ? true : false}
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
                                name='quarta'
                                value='7:00 - 8:00'
                                onChange={handleCheckBoxChangeQua}
                                checked={(checkedItemQua.find(i => i.id === 2)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='6'>11:00 - 12:00</label>
                            <input
                                type='checkbox'
                                id='6'
                                name='quarta'
                                value='11:00 - 12:00'
                                onChange={handleCheckBoxChangeQua}
                                checked={(checkedItemQua.find(i => i.id === 6)) ? true : false}
                            />
                        </div>

                        <div className={styles.ampm}>
                            <label htmlFor='10'>15:00 - 16:00</label>
                            <input
                                type='checkbox'
                                id='10'
                                name='quarta'
                                value='15:00 - 16:00'
                                onChange={handleCheckBoxChangeQua}
                                checked={(checkedItemQua.find(i => i.id === 10)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='14'>19:00 - 20:00</label>
                            <input
                                type='checkbox'
                                id='14'
                                name='quarta'
                                value='19:00 - 20:00'
                                onChange={handleCheckBoxChangeQua}
                                checked={(checkedItemQua.find(i => i.id === 14)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='18'>23:00 - 00:00</label>
                            <input
                                type='checkbox'
                                id='18'
                                name='quarta'
                                value='23:00 - 00:00'
                                onChange={handleCheckBoxChangeQua}
                                checked={(checkedItemQua.find(i => i.id === 18)) ? true : false}
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
                                name='quarta'
                                value='8:00 - 9:00'
                                onChange={handleCheckBoxChangeQua}
                                checked={(checkedItemQua.find(i => i.id === 3)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='7'>12:00 - 13:00</label>
                            <input
                                type='checkbox'
                                id='7'
                                name='quarta'
                                value='12:00 - 13:00'
                                onChange={handleCheckBoxChangeQua}
                                checked={(checkedItemQua.find(i => i.id === 7)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='11'>16:00 - 17:00</label>
                            <input
                                type='checkbox'
                                id='11'
                                name='quarta'
                                value='16:00 - 17:00'
                                onChange={handleCheckBoxChangeQua}
                                checked={(checkedItemQua.find(i => i.id === 11)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='15'>20:00 - 21:00</label>
                            <input
                                type='checkbox'
                                id='15'
                                name='quarta'
                                value='20:00 - 21:00'
                                onChange={handleCheckBoxChangeQua}
                                checked={(checkedItemQua.find(i => i.id === 15)) ? true : false}
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
                                name='quarta'
                                value='9:00 - 10:00'
                                onChange={handleCheckBoxChangeQua}
                                checked={(checkedItemQua.find(i => i.id === 4)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='8'>13:00 - 14:00</label>
                            <input
                                type='checkbox'
                                id='8'
                                name='quarta'
                                value='13:00 - 14:00'
                                onChange={handleCheckBoxChangeQua}
                                checked={(checkedItemQua.find(i => i.id === 8)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='12'>17:00 - 18:00</label>
                            <input
                                type='checkbox'
                                id='12'
                                name='quarta'
                                value='17:00 - 18:00'
                                onChange={handleCheckBoxChangeQua}
                                checked={(checkedItemQua.find(i => i.id === 12)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='16'>21:00 - 22:00</label>
                            <input
                                type='checkbox'
                                id='16'
                                name='quarta'
                                value='21:00 - 22:00'
                                onChange={handleCheckBoxChangeQua}
                                checked={(checkedItemQua.find(i => i.id === 16)) ? true : false}
                            />
                        </div>
                        <div>
                            <span></span>
                        </div>
                        <div>
                            <span></span>
                        </div>
                    </>}




                {/* ***Começando os checkbox de Quinta*** */}



                {clickedButton == 'quinta' &&
                    <>
                        <div className={styles.ampm}>
                            <label htmlFor='1'>6:00 - 7:00</label>
                            <input
                                type='checkbox'
                                id='1'
                                name='quinta'
                                value='6:00 - 7:00'
                                onChange={handleCheckBoxChangeQui}
                                checked={(checkedItemQui.find(i => i.id === 1)) ? true : false}

                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='5'>10:00 - 11:00</label>
                            <input
                                type='checkbox'
                                id='5'
                                name='quinta'
                                value='10:00 - 11:00'
                                onChange={handleCheckBoxChangeQui}
                                checked={(checkedItemQui.find(i => i.id === 5)) ? true : false}


                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='9'>14:00 - 15:00</label>
                            <input
                                type='checkbox'
                                id='9'
                                name='quinta'
                                value='14:00 - 15:00'
                                onChange={handleCheckBoxChangeQui}
                                checked={(checkedItemQui.find(i => i.id === 9)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='13'>18:00 - 19:00</label>
                            <input
                                type='checkbox'
                                id='13'
                                name='quinta'
                                value='18:00 - 19:00'
                                onChange={handleCheckBoxChangeQui}
                                checked={(checkedItemQui.find(i => i.id === 13)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='17'>22:00 - 23:00</label>
                            <input
                                type='checkbox'
                                id='17'
                                name='quinta'
                                value='22:00 - 23:00'
                                onChange={handleCheckBoxChangeQui}
                                checked={(checkedItemQui.find(i => i.id === 17)) ? true : false}
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
                                name='quinta'
                                value='7:00 - 8:00'
                                onChange={handleCheckBoxChangeQui}
                                checked={(checkedItemQui.find(i => i.id === 2)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='6'>11:00 - 12:00</label>
                            <input
                                type='checkbox'
                                id='6'
                                name='quinta'
                                value='11:00 - 12:00'
                                onChange={handleCheckBoxChangeQui}
                                checked={(checkedItemQui.find(i => i.id === 6)) ? true : false}
                            />
                        </div>

                        <div className={styles.ampm}>
                            <label htmlFor='10'>15:00 - 16:00</label>
                            <input
                                type='checkbox'
                                id='10'
                                name='quinta'
                                value='15:00 - 16:00'
                                onChange={handleCheckBoxChangeQui}
                                checked={(checkedItemQui.find(i => i.id === 10)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='14'>19:00 - 20:00</label>
                            <input
                                type='checkbox'
                                id='14'
                                name='quinta'
                                value='19:00 - 20:00'
                                onChange={handleCheckBoxChangeQui}
                                checked={(checkedItemQui.find(i => i.id === 14)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='18'>23:00 - 00:00</label>
                            <input
                                type='checkbox'
                                id='18'
                                name='quinta'
                                value='23:00 - 00:00'
                                onChange={handleCheckBoxChangeQui}
                                checked={(checkedItemQui.find(i => i.id === 18)) ? true : false}
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
                                name='quinta'
                                value='8:00 - 9:00'
                                onChange={handleCheckBoxChangeQui}
                                checked={(checkedItemQui.find(i => i.id === 3)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='7'>12:00 - 13:00</label>
                            <input
                                type='checkbox'
                                id='7'
                                name='quinta'
                                value='12:00 - 13:00'
                                onChange={handleCheckBoxChangeQui}
                                checked={(checkedItemQui.find(i => i.id === 7)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='11'>16:00 - 17:00</label>
                            <input
                                type='checkbox'
                                id='11'
                                name='quinta'
                                value='16:00 - 17:00'
                                onChange={handleCheckBoxChangeQui}
                                checked={(checkedItemQui.find(i => i.id === 11)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='15'>20:00 - 21:00</label>
                            <input
                                type='checkbox'
                                id='15'
                                name='quinta'
                                value='20:00 - 21:00'
                                onChange={handleCheckBoxChangeQui}
                                checked={(checkedItemQui.find(i => i.id === 15)) ? true : false}
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
                                name='quinta'
                                value='9:00 - 10:00'
                                onChange={handleCheckBoxChangeQui}
                                checked={(checkedItemQui.find(i => i.id === 4)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='8'>13:00 - 14:00</label>
                            <input
                                type='checkbox'
                                id='8'
                                name='quinta'
                                value='13:00 - 14:00'
                                onChange={handleCheckBoxChangeQui}
                                checked={(checkedItemQui.find(i => i.id === 8)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='12'>17:00 - 18:00</label>
                            <input
                                type='checkbox'
                                id='12'
                                name='quinta'
                                value='17:00 - 18:00'
                                onChange={handleCheckBoxChangeQui}
                                checked={(checkedItemQui.find(i => i.id === 12)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='16'>21:00 - 22:00</label>
                            <input
                                type='checkbox'
                                id='16'
                                name='quinta'
                                value='21:00 - 22:00'
                                onChange={handleCheckBoxChangeQui}
                                checked={(checkedItemQui.find(i => i.id === 16)) ? true : false}
                            />
                        </div>
                        <div>
                            <span></span>
                        </div>
                        <div>
                            <span></span>
                        </div>
                    </>}




                {/* ***Começando os checkbox de Sexta*** */}



                {clickedButton == 'sexta' &&
                    <>
                        <div className={styles.ampm}>
                            <label htmlFor='1'>6:00 - 7:00</label>
                            <input
                                type='checkbox'
                                id='1'
                                name='sexta'
                                value='6:00 - 7:00'
                                onChange={handleCheckBoxChangeSex}
                                checked={(checkedItemSex.find(i => i.id === 1)) ? true : false}

                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='5'>10:00 - 11:00</label>
                            <input
                                type='checkbox'
                                id='5'
                                name='sexta'
                                value='10:00 - 11:00'
                                onChange={handleCheckBoxChangeSex}
                                checked={(checkedItemSex.find(i => i.id === 5)) ? true : false}


                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='9'>14:00 - 15:00</label>
                            <input
                                type='checkbox'
                                id='9'
                                name='sexta'
                                value='14:00 - 15:00'
                                onChange={handleCheckBoxChangeSex}
                                checked={(checkedItemSex.find(i => i.id === 9)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='13'>18:00 - 19:00</label>
                            <input
                                type='checkbox'
                                id='13'
                                name='sexta'
                                value='18:00 - 19:00'
                                onChange={handleCheckBoxChangeSex}
                                checked={(checkedItemSex.find(i => i.id === 13)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='17'>22:00 - 23:00</label>
                            <input
                                type='checkbox'
                                id='17'
                                name='sexta'
                                value='22:00 - 23:00'
                                onChange={handleCheckBoxChangeSex}
                                checked={(checkedItemSex.find(i => i.id === 17)) ? true : false}
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
                                name='sexta'
                                value='7:00 - 8:00'
                                onChange={handleCheckBoxChangeSex}
                                checked={(checkedItemSex.find(i => i.id === 2)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='6'>11:00 - 12:00</label>
                            <input
                                type='checkbox'
                                id='6'
                                name='sexta'
                                value='11:00 - 12:00'
                                onChange={handleCheckBoxChangeSex}
                                checked={(checkedItemSex.find(i => i.id === 6)) ? true : false}
                            />
                        </div>

                        <div className={styles.ampm}>
                            <label htmlFor='10'>15:00 - 16:00</label>
                            <input
                                type='checkbox'
                                id='10'
                                name='sexta'
                                value='15:00 - 16:00'
                                onChange={handleCheckBoxChangeSex}
                                checked={(checkedItemSex.find(i => i.id === 10)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='14'>19:00 - 20:00</label>
                            <input
                                type='checkbox'
                                id='14'
                                name='sexta'
                                value='19:00 - 20:00'
                                onChange={handleCheckBoxChangeSex}
                                checked={(checkedItemSex.find(i => i.id === 14)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='18'>23:00 - 00:00</label>
                            <input
                                type='checkbox'
                                id='18'
                                name='sexta'
                                value='23:00 - 00:00'
                                onChange={handleCheckBoxChangeSex}
                                checked={(checkedItemSex.find(i => i.id === 18)) ? true : false}
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
                                name='sexta'
                                value='8:00 - 9:00'
                                onChange={handleCheckBoxChangeSex}
                                checked={(checkedItemSex.find(i => i.id === 3)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='7'>12:00 - 13:00</label>
                            <input
                                type='checkbox'
                                id='7'
                                name='sexta'
                                value='12:00 - 13:00'
                                onChange={handleCheckBoxChangeSex}
                                checked={(checkedItemSex.find(i => i.id === 7)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='11'>16:00 - 17:00</label>
                            <input
                                type='checkbox'
                                id='11'
                                name='sexta'
                                value='16:00 - 17:00'
                                onChange={handleCheckBoxChangeSex}
                                checked={(checkedItemSex.find(i => i.id === 11)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='15'>20:00 - 21:00</label>
                            <input
                                type='checkbox'
                                id='15'
                                name='sexta'
                                value='20:00 - 21:00'
                                onChange={handleCheckBoxChangeSex}
                                checked={(checkedItemSex.find(i => i.id === 15)) ? true : false}
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
                                name='sexta'
                                value='9:00 - 10:00'
                                onChange={handleCheckBoxChangeSex}
                                checked={(checkedItemSex.find(i => i.id === 4)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='8'>13:00 - 14:00</label>
                            <input
                                type='checkbox'
                                id='8'
                                name='sexta'
                                value='13:00 - 14:00'
                                onChange={handleCheckBoxChangeSex}
                                checked={(checkedItemSex.find(i => i.id === 8)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='12'>17:00 - 18:00</label>
                            <input
                                type='checkbox'
                                id='12'
                                name='sexta'
                                value='17:00 - 18:00'
                                onChange={handleCheckBoxChangeSex}
                                checked={(checkedItemSex.find(i => i.id === 12)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='16'>21:00 - 22:00</label>
                            <input
                                type='checkbox'
                                id='16'
                                name='sexta'
                                value='21:00 - 22:00'
                                onChange={handleCheckBoxChangeSex}
                                checked={(checkedItemSex.find(i => i.id === 16)) ? true : false}
                            />
                        </div>
                        <div>
                            <span></span>
                        </div>
                        <div>
                            <span></span>
                        </div>
                    </>}




                {/* ***Começando os checkbox de Sábado*** */}



                {clickedButton == 'sabado' &&
                    <>
                        <div className={styles.ampm}>
                            <label htmlFor='1'>6:00 - 7:00</label>
                            <input
                                type='checkbox'
                                id='1'
                                name='sabado'
                                value='6:00 - 7:00'
                                onChange={handleCheckBoxChangeSab}
                                checked={(checkedItemSab.find(i => i.id === 1)) ? true : false}

                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='5'>10:00 - 11:00</label>
                            <input
                                type='checkbox'
                                id='5'
                                name='sabado'
                                value='10:00 - 11:00'
                                onChange={handleCheckBoxChangeSab}
                                checked={(checkedItemSab.find(i => i.id === 5)) ? true : false}


                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='9'>14:00 - 15:00</label>
                            <input
                                type='checkbox'
                                id='9'
                                name='sabado'
                                value='14:00 - 15:00'
                                onChange={handleCheckBoxChangeSab}
                                checked={(checkedItemSab.find(i => i.id === 9)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='13'>18:00 - 19:00</label>
                            <input
                                type='checkbox'
                                id='13'
                                name='sabado'
                                value='18:00 - 19:00'
                                onChange={handleCheckBoxChangeSab}
                                checked={(checkedItemSab.find(i => i.id === 13)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='17'>22:00 - 23:00</label>
                            <input
                                type='checkbox'
                                id='17'
                                name='sabado'
                                value='22:00 - 23:00'
                                onChange={handleCheckBoxChangeSab}
                                checked={(checkedItemSab.find(i => i.id === 17)) ? true : false}
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
                                name='sabado'
                                value='7:00 - 8:00'
                                onChange={handleCheckBoxChangeSab}
                                checked={(checkedItemSab.find(i => i.id === 2)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='6'>11:00 - 12:00</label>
                            <input
                                type='checkbox'
                                id='6'
                                name='sabado'
                                value='11:00 - 12:00'
                                onChange={handleCheckBoxChangeSab}
                                checked={(checkedItemSab.find(i => i.id === 6)) ? true : false}
                            />
                        </div>

                        <div className={styles.ampm}>
                            <label htmlFor='10'>15:00 - 16:00</label>
                            <input
                                type='checkbox'
                                id='10'
                                name='sabado'
                                value='15:00 - 16:00'
                                onChange={handleCheckBoxChangeSab}
                                checked={(checkedItemSab.find(i => i.id === 10)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='14'>19:00 - 20:00</label>
                            <input
                                type='checkbox'
                                id='14'
                                name='sabado'
                                value='19:00 - 20:00'
                                onChange={handleCheckBoxChangeSab}
                                checked={(checkedItemSab.find(i => i.id === 14)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='18'>23:00 - 00:00</label>
                            <input
                                type='checkbox'
                                id='18'
                                name='sabado'
                                value='23:00 - 00:00'
                                onChange={handleCheckBoxChangeSab}
                                checked={(checkedItemSab.find(i => i.id === 18)) ? true : false}
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
                                name='sabado'
                                value='8:00 - 9:00'
                                onChange={handleCheckBoxChangeSab}
                                checked={(checkedItemSab.find(i => i.id === 3)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='7'>12:00 - 13:00</label>
                            <input
                                type='checkbox'
                                id='7'
                                name='sabado'
                                value='12:00 - 13:00'
                                onChange={handleCheckBoxChangeSab}
                                checked={(checkedItemSab.find(i => i.id === 7)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='11'>16:00 - 17:00</label>
                            <input
                                type='checkbox'
                                id='11'
                                name='sabado'
                                value='16:00 - 17:00'
                                onChange={handleCheckBoxChangeSab}
                                checked={(checkedItemSab.find(i => i.id === 11)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='15'>20:00 - 21:00</label>
                            <input
                                type='checkbox'
                                id='15'
                                name='sabado'
                                value='20:00 - 21:00'
                                onChange={handleCheckBoxChangeSab}
                                checked={(checkedItemSab.find(i => i.id === 15)) ? true : false}
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
                                name='sabado'
                                value='9:00 - 10:00'
                                onChange={handleCheckBoxChangeSab}
                                checked={(checkedItemSab.find(i => i.id === 4)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='8'>13:00 - 14:00</label>
                            <input
                                type='checkbox'
                                id='8'
                                name='sabado'
                                value='13:00 - 14:00'
                                onChange={handleCheckBoxChangeSab}
                                checked={(checkedItemSab.find(i => i.id === 8)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='12'>17:00 - 18:00</label>
                            <input
                                type='checkbox'
                                id='12'
                                name='sabado'
                                value='17:00 - 18:00'
                                onChange={handleCheckBoxChangeSab}
                                checked={(checkedItemSab.find(i => i.id === 12)) ? true : false}
                            />
                        </div>
                        <div className={styles.ampm}>
                            <label htmlFor='16'>21:00 - 22:00</label>
                            <input
                                type='checkbox'
                                id='16'
                                name='sabado'
                                value='21:00 - 22:00'
                                onChange={handleCheckBoxChangeSab}
                                checked={(checkedItemSab.find(i => i.id === 16)) ? true : false}
                            />
                        </div>
                        <div>
                            <span></span>
                        </div>
                        <div>
                            <span></span>
                        </div>
                    </>}



            </div>

        </div >

    )
}

export { Schaduale };