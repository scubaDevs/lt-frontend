import styles from '../Country_Phone/Country_Phone.module.css';
import { useState } from 'react';
import Image from 'next/image';

type Props = {
    countryList: any[]
}

const Country_Phone = ({ countryList }: Props) => {


    countryList = countryList.sort(function (a, b) {

        return (a.translations.por.common > b.translations.por.common) ? 1 : ((b.translations.por.common > a.translations.por.common) ? -1 : 0);

    });




    const [selectedCountry, setSelectedCountry] = useState('Escolha seu País');


    const findCountryOnSortedList = countryList.find((obj) => {

        if (obj.translations.por.common == selectedCountry || ((selectedCountry == 'Escolha seu País') ? obj.translations.por.common == 'Brasil' : false)) {
            return (
                true
            )
        } else {
            return (
                false
            )
        }

    })

    console.log(findCountryOnSortedList.idd.suffixes[0])






    return (
        <>
            <li className={`${styles.liItens} ${styles.liCountry} `}>
                <label htmlFor='country' className={styles.allLabels}>País</label>

                <select id='country' name='country' className={`${styles.inputAll} ${styles.inputSelect}`} onChange={(e) => { setSelectedCountry(e.target.value) }} value={selectedCountry}>
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

            {selectedCountry != 'Escolha seu País' &&
                <li className={`${styles.liItens} ${styles.liPhone}`}>
                    <label htmlFor='phone' className={styles.allLabels}>Whatsapp</label>
                    <input

                        type="tel"
                        id="phone"
                        name='phone'
                        className={`${styles.inputAll} ${styles.phoneInput} `}
                        placeholder="Digite o telefone com DDD"

                    />
                </li>
            }
            {
                selectedCountry != 'Escolha seu País' &&

                <li className={`${styles.liImage} `}>


                    <div className={styles.idd}>
                        <img
                            src={findCountryOnSortedList.flags.png ? findCountryOnSortedList.flags.png : findCountryOnSortedList()}
                            className={styles.flag}
                        />
                        <p>{findCountryOnSortedList.idd.root ? findCountryOnSortedList.idd.root : findCountryOnSortedList()}</p>
                        <p>{findCountryOnSortedList.idd.suffixes[0] ? findCountryOnSortedList.idd.suffixes : findCountryOnSortedList()}</p>
                    </div>


                </li >
            }











        </>

    )
}



export { Country_Phone };


