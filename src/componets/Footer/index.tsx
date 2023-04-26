import s from './Footer.module.scss';

export default function Footer(){
    return (
        <footer className={s.footer}>
            <div className={s.footer__container}>
                <h1 className={s.footer__title}>Sorteio Online</h1>
            </div>
        </footer>
    )
}