import styles from '../Schaduale/Schaduale.module.css';
import React, { SetStateAction, useState } from 'react';
import { IdValueType } from '../../types/types';





type Props = {

    day: React.Dispatch<SetStateAction<string>>;
    seg: React.Dispatch<SetStateAction<IdValueType[]>>;
    ter: React.Dispatch<SetStateAction<IdValueType[]>>;
    qua: React.Dispatch<SetStateAction<IdValueType[]>>;
    qui: React.Dispatch<SetStateAction<IdValueType[]>>;
    sex: React.Dispatch<SetStateAction<IdValueType[]>>;
    sab: React.Dispatch<SetStateAction<IdValueType[]>>;
    dayState: string;
    segState: IdValueType[];
    terState: IdValueType[];
    quaState: IdValueType[];
    quiState: IdValueType[];
    sexState: IdValueType[];
    sabState: IdValueType[];

}

//Início do Componente

const Schaduale = ({ day, seg, ter, qua, qui, sex, sab, dayState, segState, terState, quaState, quiState, sexState, sabState }: Props) => {







    //Dias da semana selecionado

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const button: HTMLButtonElement = e.currentTarget;
        return day(button.value)


    }

    //Botão que desmarca um horário selecionado na segunda
    const handleClearBtnSeg = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const clear: HTMLButtonElement = e.currentTarget;
        const id = parseInt(clear.id);
        let list = [...segState];
        list.splice(list.findIndex(i => i.id === id), 1);
        seg(list);
        return


    }


    //Botão que desmarca um horário selecionado na Terça
    const handleClearBtnTer = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const clear: HTMLButtonElement = e.currentTarget;
        const id = parseInt(clear.id);
        let list = [...terState];
        list.splice(list.findIndex(i => i.id === id), 1)
        ter(list)
        return
    }


    //Botão que desmarca um horário selecionado na Quarta
    const handleClearBtnQua = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const clear: HTMLButtonElement = e.currentTarget;
        const id = parseInt(clear.id);
        let list = [...quaState];
        list.splice(list.findIndex(i => i.id === id), 1)
        qua(list)
        return
    }


    //Botão que desmarca um horário selecionado na Quinta
    const handleClearBtnQui = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const clear: HTMLButtonElement = e.currentTarget;
        const id = parseInt(clear.id);
        let list = [...quiState];
        list.splice(list.findIndex(i => i.id === id), 1)
        qui(list)
        return
    }

    //Botão que desmarca um horário selecionado na sexta
    const handleClearBtnSex = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const clear: HTMLButtonElement = e.currentTarget;
        const id = parseInt(clear.id);
        let list = [...sexState];
        list.splice(list.findIndex(i => i.id === id), 1)
        sex(list)
        return
    }

    //Botão que desmarca um horário selecionado no Sábado
    const handleClearBtnSab = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const clear: HTMLButtonElement = e.currentTarget;
        const id = parseInt(clear.id);
        let list = [...sabState];
        list.splice(list.findIndex(i => i.id === id), 1)
        sab(list)
        return
    }





    //Horário disponíveis selecionados com base nos dias da semana

    //Segunda-Feira

    const handleCheckBoxChangeSeg = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = parseInt(e.target.id);
        const value = e.target.value;
        const name = e.target.name;
        const obj = { id: id, value: value, name: name }

        if (e.target.checked == true) {
            if (segState.find(i => i.value === value)) {
                return
            } else {
                let newList = [...segState];
                newList.push(obj);
                //colocando em ordem crescente com base no valor do id
                newList.sort((a, b) => (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0)
                seg(newList);
                return
            }
        }
        if (e.target.checked == false) {

            if (segState.find(i => i.value === value)) {
                let newList = [...segState]
                newList.splice(newList.findIndex(i => i.id === id), 1)
                seg(newList)
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
            if (terState.find(i => i.value === value)) {
                return
            } else {
                let newList = [...terState];
                newList.push(obj);
                //colocando em ordem crescente com base no valor do id
                newList.sort((a, b) => (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0)
                ter(newList);
                return
            }
        }
        if (e.target.checked == false) {

            if (terState.find(i => i.value === value)) {
                const newList = [...terState]
                newList.splice(newList.findIndex(i => i.id === id), 1)
                ter(newList)
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
            if (quaState.find(i => i.value === value)) {
                return
            } else {
                let newList = [...quaState];
                newList.push(obj);
                //colocando em ordem crescente com base no valor do id
                newList.sort((a, b) => (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0)
                qua(newList);
                return
            }
        }
        if (e.target.checked == false) {

            if (quaState.find(i => i.value === value)) {
                let newList = [...quaState]
                newList.splice(newList.findIndex(i => i.id === id), 1)
                qua(newList)
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
            if (quiState.find(i => i.value === value)) {
                return
            } else {
                const newList = [...quiState];
                newList.push(obj);
                //colocando em ordem crescente com base no valor do id
                newList.sort((a, b) => (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0)
                qui(newList);
                return
            }
        }
        if (e.target.checked == false) {

            if (quiState.find(i => i.value === value)) {
                const newList = [...quiState]
                newList.splice(newList.findIndex(i => i.id === id), 1)
                qui(newList)
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
            if (sexState.find(i => i.value === value)) {
                return
            } else {
                const newListSex = [...sexState];
                newListSex.push(obj);
                //colocando em ordem crescente com base no valor do id
                newListSex.sort((a, b) => (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0)
                sex(newListSex);
                return
            }
        }
        if (e.target.checked == false) {

            if (sexState.find(i => i.value === value)) {
                const newListSex = [...sexState];
                newListSex.splice(newListSex.findIndex(i => i.id === id), 1)
                sex(newListSex)
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
            if (sabState.find(i => i.value === value)) {
                return
            } else {
                let newList = [...sabState];
                newList.push(obj);
                //colocando em ordem crescente com base no valor do id
                newList.sort((a, b) => (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0)
                sab(newList);
                return
            }
        }
        if (e.target.checked == false) {

            if (sabState.find(i => i.value === value)) {
                let newList = [...sabState]
                newList.splice(newList.findIndex(i => i.id === id), 1)
                sab(newList)
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
                        {segState[0] && <h1 className={styles.availableTittle}>Segunda</h1>}
                        {
                            segState.map((item, index) => {
                                return (
                                    <li className={styles.available} key={index}>{`${item.value}`} <button id={`${item.id}`} className={styles.clearItem} onClick={handleClearBtnSeg}>X</button></li>
                                )
                            })}

                    </ul>
                    <ul>

                        {terState[0] && <h1 className={styles.availableTittle}>Terça</h1>}
                        {terState.map((item, index) => {
                            return (
                                <li className={styles.available} key={index}>{`${item.value}`}<button id={`${item.id}`} className={styles.clearItem} onClick={handleClearBtnTer}>X</button></li>
                            )
                        })}

                    </ul>
                    <ul>

                        {quaState[0] && <h1 className={styles.availableTittle}>Quarta</h1>}
                        {quaState.map((item, index) => {
                            return (
                                <li className={styles.available} key={index}>{`${item.value}`}<button id={`${item.id}`} className={styles.clearItem} onClick={handleClearBtnQua}>X</button></li>
                            )
                        })}

                    </ul>
                    <ul>

                        {quiState[0] && <h1 className={styles.availableTittle}>Quinta</h1>}
                        {quiState.map((item, index) => {
                            return (
                                <li className={styles.available} key={index}>{`${item.value}`}<button id={`${item.id}`} className={styles.clearItem} onClick={handleClearBtnQui}>X</button></li>
                            )
                        })}


                    </ul>
                    <ul>

                        {sexState[0] && <h1 className={styles.availableTittle}>Sexta</h1>}
                        {sexState.map((item, index) => {
                            return (
                                <li className={styles.available} key={index}>{` ${item.value}`}<button id={`${item.id}`} className={styles.clearItem} onClick={handleClearBtnSex}>X</button></li>
                            )
                        })}

                    </ul>
                    <ul>

                        {sabState[0] && <h1 className={styles.availableTittle}>Sábado</h1>}
                        {sabState.map((item, index) => {
                            return (
                                <li className={styles.available} key={index}>{` ${item.value}`}<button id={`${item.id}`} className={styles.clearItem} onClick={handleClearBtnSab}>X</button></li>
                            )
                        })}

                    </ul>
                </div>
            </div>



            {/* Botões com os dias da semana */}

            <div className={styles.container}>
                <div>
                    <button
                        value='segunda'
                        onClick={handleClick}
                        className={dayState == 'segunda' ? `${styles.day}` : `${styles.allDays}`}
                    >
                        Segunda
                    </button>
                </div>
                <div>
                    <button
                        value='terca'
                        onClick={handleClick}
                        className={dayState == 'terca' ? `${styles.day}` : `${styles.allDays}`}
                    >
                        Terça
                    </button>
                </div>
                <div>
                    <button
                        value='quarta'
                        onClick={handleClick}
                        className={dayState == 'quarta' ? `${styles.day}` : `${styles.allDays}`}
                    >
                        Quarta
                    </button>
                </div >
                <div>
                    <button
                        value='quinta'
                        onClick={handleClick}
                        className={dayState == 'quinta' ? `${styles.day}` : `${styles.allDays}`}
                    >
                        Quinta
                    </button>
                </div>
                <div>
                    <button
                        value='sexta'
                        onClick={handleClick}
                        className={dayState == 'sexta' ? `${styles.day}` : `${styles.allDays}`}
                    >
                        Sexta
                    </button>
                </div>
                <div>
                    <button
                        value='sabado'
                        onClick={handleClick}
                        className={dayState == 'sabado' ? `${styles.day}` : `${styles.allDays}`}
                    >
                        Sábado
                    </button>
                </div>





                {/* ***Começando os checkbox de Segunda*** */}



                {dayState == 'segunda' &&
                    <>
                        <div className={styles.ampm}>
                            <label htmlFor='1'>6:00 - 7:00</label>
                            <input
                                type='checkbox'
                                id='1'
                                name='segunda'
                                value='6:00 - 7:00'
                                onChange={handleCheckBoxChangeSeg}
                                checked={segState.find(i => i.id === 1) ? true : false}

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
                                checked={segState.find(i => i.id === 5) ? true : false}


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
                                checked={segState.find(i => i.id === 9) ? true : false}
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
                                checked={segState.find(i => i.id === 13) ? true : false}
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
                                checked={segState.find(i => i.id === 17) ? true : false}
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
                                checked={segState.find(i => i.id === 2) ? true : false}
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
                                checked={segState.find(i => i.id === 6) ? true : false}
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
                                checked={segState.find(i => i.id === 10) ? true : false}
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
                                checked={segState.find(i => i.id === 14) ? true : false}
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
                                checked={segState.find(i => i.id === 18) ? true : false}
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
                                checked={segState.find(i => i.id === 3) ? true : false}
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
                                checked={segState.find(i => i.id === 7) ? true : false}
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
                                checked={segState.find(i => i.id === 11) ? true : false}
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
                                checked={segState.find(i => i.id === 15) ? true : false}
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
                                checked={segState.find(i => i.id === 4) ? true : false}
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
                                checked={segState.find(i => i.id === 8) ? true : false}
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
                                checked={segState.find(i => i.id === 12) ? true : false}
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
                                checked={segState.find(i => i.id === 16) ? true : false}
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



                {dayState == 'terca' &&
                    <>
                        <div className={styles.ampm}>
                            <label htmlFor='1'>6:00 - 7:00</label>
                            <input
                                type='checkbox'
                                id='1'
                                name='terca'
                                value='6:00 - 7:00'
                                onChange={handleCheckBoxChangeTer}
                                checked={terState.find(i => i.id === 1) ? true : false}

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
                                checked={terState.find(i => i.id === 5) ? true : false}


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
                                checked={terState.find(i => i.id === 9) ? true : false}
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
                                checked={terState.find(i => i.id === 13) ? true : false}
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
                                checked={terState.find(i => i.id === 17) ? true : false}
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
                                checked={terState.find(i => i.id === 2) ? true : false}
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
                                checked={terState.find(i => i.id === 6) ? true : false}
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
                                checked={terState.find(i => i.id === 10) ? true : false}
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
                                checked={terState.find(i => i.id === 14) ? true : false}
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
                                checked={terState.find(i => i.id === 18) ? true : false}
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
                                checked={terState.find(i => i.id === 3) ? true : false}
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
                                checked={terState.find(i => i.id === 7) ? true : false}
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
                                checked={terState.find(i => i.id === 11) ? true : false}
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
                                checked={terState.find(i => i.id === 15) ? true : false}
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
                                checked={terState.find(i => i.id === 4) ? true : false}
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
                                checked={terState.find(i => i.id === 8) ? true : false}
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
                                checked={terState.find(i => i.id === 12) ? true : false}
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
                                checked={terState.find(i => i.id === 16) ? true : false}
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



                {dayState == 'quarta' &&
                    <>
                        <div className={styles.ampm}>
                            <label htmlFor='1'>6:00 - 7:00</label>
                            <input
                                type='checkbox'
                                id='1'
                                name='quarta'
                                value='6:00 - 7:00'
                                onChange={handleCheckBoxChangeQua}
                                checked={quaState.find(i => i.id === 1) ? true : false}

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
                                checked={quaState.find(i => i.id === 5) ? true : false}


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
                                checked={quaState.find(i => i.id === 9) ? true : false}
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
                                checked={quaState.find(i => i.id === 13) ? true : false}
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
                                checked={quaState.find(i => i.id === 17) ? true : false}
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
                                checked={quaState.find(i => i.id === 2) ? true : false}
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
                                checked={quaState.find(i => i.id === 6) ? true : false}
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
                                checked={quaState.find(i => i.id === 10) ? true : false}
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
                                checked={quaState.find(i => i.id === 14) ? true : false}
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
                                checked={quaState.find(i => i.id === 18) ? true : false}
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
                                checked={quaState.find(i => i.id === 3) ? true : false}
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
                                checked={quaState.find(i => i.id === 7) ? true : false}
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
                                checked={quaState.find(i => i.id === 11) ? true : false}
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
                                checked={quaState.find(i => i.id === 15) ? true : false}
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
                                checked={quaState.find(i => i.id === 4) ? true : false}
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
                                checked={quaState.find(i => i.id === 8) ? true : false}
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
                                checked={quaState.find(i => i.id === 12) ? true : false}
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
                                checked={quaState.find(i => i.id === 16) ? true : false}
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



                {dayState == 'quinta' &&
                    <>
                        <div className={styles.ampm}>
                            <label htmlFor='1'>6:00 - 7:00</label>
                            <input
                                type='checkbox'
                                id='1'
                                name='quinta'
                                value='6:00 - 7:00'
                                onChange={handleCheckBoxChangeQui}
                                checked={quiState.find(i => i.id === 1) ? true : false}

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
                                checked={quiState.find(i => i.id === 5) ? true : false}


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
                                checked={quiState.find(i => i.id === 9) ? true : false}
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
                                checked={quiState.find(i => i.id === 13) ? true : false}
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
                                checked={quiState.find(i => i.id === 17) ? true : false}
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
                                checked={quiState.find(i => i.id === 2) ? true : false}
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
                                checked={quiState.find(i => i.id === 6) ? true : false}
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
                                checked={quiState.find(i => i.id === 10) ? true : false}
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
                                checked={quiState.find(i => i.id === 14) ? true : false}
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
                                checked={quiState.find(i => i.id === 18) ? true : false}
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
                                checked={quiState.find(i => i.id === 3) ? true : false}
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
                                checked={quiState.find(i => i.id === 7) ? true : false}
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
                                checked={quiState.find(i => i.id === 11) ? true : false}
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
                                checked={quiState.find(i => i.id === 15) ? true : false}
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
                                checked={quiState.find(i => i.id === 4) ? true : false}
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
                                checked={quiState.find(i => i.id === 8) ? true : false}
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
                                checked={quiState.find(i => i.id === 12) ? true : false}
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
                                checked={quiState.find(i => i.id === 16) ? true : false}
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



                {dayState == 'sexta' &&
                    <>
                        <div className={styles.ampm}>
                            <label htmlFor='1'>6:00 - 7:00</label>
                            <input
                                type='checkbox'
                                id='1'
                                name='sexta'
                                value='6:00 - 7:00'
                                onChange={handleCheckBoxChangeSex}
                                checked={sexState.find(i => i.id === 1) ? true : false}

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
                                checked={sexState.find(i => i.id === 5) ? true : false}


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
                                checked={sexState.find(i => i.id === 9) ? true : false}
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
                                checked={sexState.find(i => i.id === 13) ? true : false}
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
                                checked={sexState.find(i => i.id === 17) ? true : false}
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
                                checked={sexState.find(i => i.id === 2) ? true : false}
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
                                checked={sexState.find(i => i.id === 6) ? true : false}
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
                                checked={sexState.find(i => i.id === 10) ? true : false}
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
                                checked={sexState.find(i => i.id === 14) ? true : false}
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
                                checked={sexState.find(i => i.id === 18) ? true : false}
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
                                checked={sexState.find(i => i.id === 3) ? true : false}
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
                                checked={sexState.find(i => i.id === 7) ? true : false}
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
                                checked={sexState.find(i => i.id === 11) ? true : false}
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
                                checked={sexState.find(i => i.id === 15) ? true : false}
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
                                checked={sexState.find(i => i.id === 4) ? true : false}
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
                                checked={sexState.find(i => i.id === 8) ? true : false}
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
                                checked={sexState.find(i => i.id === 12) ? true : false}
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
                                checked={sexState.find(i => i.id === 16) ? true : false}
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



                {dayState == 'sabado' &&
                    <>
                        <div className={styles.ampm}>
                            <label htmlFor='1'>6:00 - 7:00</label>
                            <input
                                type='checkbox'
                                id='1'
                                name='sabado'
                                value='6:00 - 7:00'
                                onChange={handleCheckBoxChangeSab}
                                checked={sabState.find(i => i.id === 1) ? true : false}

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
                                checked={sabState.find(i => i.id === 5) ? true : false}


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
                                checked={sabState.find(i => i.id === 9) ? true : false}
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
                                checked={sabState.find(i => i.id === 13) ? true : false}
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
                                checked={sabState.find(i => i.id === 17) ? true : false}
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
                                checked={sabState.find(i => i.id === 2) ? true : false}
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
                                checked={sabState.find(i => i.id === 6) ? true : false}
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
                                checked={sabState.find(i => i.id === 10) ? true : false}
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
                                checked={sabState.find(i => i.id === 14) ? true : false}
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
                                checked={sabState.find(i => i.id === 18) ? true : false}
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
                                checked={sabState.find(i => i.id === 3) ? true : false}
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
                                checked={sabState.find(i => i.id === 7) ? true : false}
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
                                checked={sabState.find(i => i.id === 11) ? true : false}
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
                                checked={sabState.find(i => i.id === 15) ? true : false}
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
                                checked={sabState.find(i => i.id === 4) ? true : false}
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
                                checked={sabState.find(i => i.id === 8) ? true : false}
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
                                checked={sabState.find(i => i.id === 12) ? true : false}
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
                                checked={sabState.find(i => i.id === 16) ? true : false}
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