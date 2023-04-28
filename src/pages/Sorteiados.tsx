import { useListaSorteadosState } from 'state/hooks/useListaSorteados';
import s from './Sorteados.module.scss'
import imgSorteio from 'assets/img/festa.svg';
import { useNavigate } from 'react-router-dom';

export default function Sorteados(){

    const sorteados = useListaSorteadosState();
    const navegate = useNavigate();

    return (
        <div className={s.sorteados}>
            <h2 className={s.title}>Resultado do Sorteio</h2>
            <h2 className={s.title}>Os nomes sorteados foram:</h2>
            <img src={imgSorteio} alt="Festa" />

            <ul className={s.sorteados}>
                { sorteados.map( (sorteado, index) => 
                    <li key={index} className={s.sorteado}>
                        {sorteado}
                    </li>
                ) }
            </ul>

            <button className={s.BotaoVoltar} onClick={() => navegate('/')}>Voltar</button>
        </div>  
    )
}