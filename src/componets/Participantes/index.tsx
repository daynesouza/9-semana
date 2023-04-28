import s from './Participantes.module.scss';
import { useListaParticipantes } from "state/hooks/useListaParticipantes";

export default function Participantes(){
    const participantes = useListaParticipantes();

    return (
        <div className={s.participantes}>
            <h2 className={s.participantes__titulo}>Participantes</h2>
            <ul className={s.participantes__lista}>
                {participantes.map( (participante, indice) => <li key={indice} className={s.participante}>{participante}</li>)}
            </ul>
        </div>
    )
}
