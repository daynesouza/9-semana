import { Outlet } from 'react-router-dom'
import s from './PaginaPadrao.module.scss'
import Header from '../../componets/Header'
import Footer from '../../componets/Footer'

export default function PaginaPadrao() {
    return (
        <>
            <Header />
            <main className={s.main}>
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}