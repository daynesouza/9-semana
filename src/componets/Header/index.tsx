import s from './Header.module.scss';

export default function Header(){
    return (
        <header className={s.header}>
            <div className={s.header__container}>
                <h1 className={s.header__title}>Sorteio Online</h1>
            </div>
        </header>
    )
}