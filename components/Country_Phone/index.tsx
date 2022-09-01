import styles from '../Country_Phone/Country_Phone.module.css';
import React, { SetStateAction, useState } from 'react';



type Props = {
    countryList: any[];
    setC: React.Dispatch<SetStateAction<string>>;
    setP: React.Dispatch<SetStateAction<string>>;
    c: String;
    p: string;

}

const Country_Phone = ({ countryList, setC, setP, c, p }: Props) => {

    //Colocando a lista em ordem crescente

    countryList = countryList.sort(function (a, b) {

        return (a.translations.por.common > b.translations.por.common) ? 1 : ((b.translations.por.common > a.translations.por.common) ? -1 : 0);

    });







    const findCountryOnSortedList = countryList.find((obj) => {

        if (obj.translations.por.common == c || c == 'Escolha seu País') {
            return (
                true
            )
        } else {
            return (
                false
            )
        }

    })




    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Este é o valor", e.target.value)
        return setP(e.target.value);

    }




    return (
        <>
            <li className={`${styles.liItens} ${styles.liCountry} `}>
                <label htmlFor='country' className={styles.allLabels}>País</label>

                <select id='country' name='country' className={`${styles.inputAll} ${styles.inputSelect}`} onChange={(e) => { setC(e.target.value) }} >
                    <option className={styles.inputOption} >{'Escolha o seu País'}</option>
                    {

                        countryList.map((item, index) => {


                            return (

                                <option key={index} value={item.translations.por.common} className={styles.inputOption}>
                                    {item.translations.por.common}
                                </option>
                            )
                        })}

                </select>

            </li>

            {c != 'Escolha seu País' &&
                <li className={`${styles.liItens} ${styles.liPhone}`}>
                    <label htmlFor='phone' className={styles.allLabels}>Whatsapp</label>
                    <input

                        type="tel"
                        id="phone"
                        name='phone'
                        className={`${styles.inputAll} ${styles.phoneInput} `}
                        placeholder="Digite o telefone com DDD"
                        onChange={handlePhone}
                        value={p}

                    />
                </li>
            }
            {/* ------------------------------------------ BUGADO ---------------------------------------------------------------- */}
            {
                c != 'Escolha seu País' &&

                <li className={`${styles.liImage} `}>
                    <div className={styles.idd}>
                        <img
                            src={(findCountryOnSortedList.flags.png ? true : false) ? findCountryOnSortedList.flags.png : null}
                            className={styles.flag}
                        />
                        <p>{(findCountryOnSortedList.idd.root ? true : false) ? findCountryOnSortedList.idd.root : null}</p>
                        <p>{(findCountryOnSortedList.idd.suffixes[0] ? true : false) ? findCountryOnSortedList.idd.suffixes : null}</p>
                    </div>
                </li >
            }

            {/* ------------------------------------------ BUGADO ---------------------------------------------------------------- */}












        </>

    )
}



export { Country_Phone };


