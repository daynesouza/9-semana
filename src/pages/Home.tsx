import FormCadastro from "componets/FormCadastro";
import Participantes from "componets/Participantes";
import s from './Home.module.scss';
import Sortear from "componets/Sortear";

export default function Home(){
    return (
        <div className={s.home}>
            <FormCadastro/>
            <Participantes />
            <Sortear />
        </div>
    );
}