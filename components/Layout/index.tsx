import { ReactElement } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import Head from "next/head";
import styles from "../Layout/Layout.module.css";

type Props = {
    children: ReactElement
}

const Layout = ({ children }: Props) => {
    return (

        <div className={styles.container}>
            <Header />
            <main className={styles.main_container}>{children}</main>
            <Footer />

        </div>


    )
}



export { Layout };