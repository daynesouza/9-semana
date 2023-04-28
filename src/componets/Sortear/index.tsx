import { useState } from 'react';
import s from './Sortear.module.scss';
import { useRecoilState } from 'recoil';
import { erroStateSortear } from 'state/atom';
import useSorteio from 'state/hooks/useSorteio';

export default function Sortear(){
    const [quantidade, setQuantidade] = useState('');
    const [mensagemErro, setMensagemErro] = useRecoilState(erroStateSortear);
    
    const sorteio = useSorteio();

    const validarCampo = (evento:React.ChangeEvent<HTMLInputElement>) => {
        setQuantidade(evento.target.value)
    }

    const realizarSorteio = () => {
        if(quantidade === ''){
            setMensagemErro('Digite um valor!')
            setTimeout( () => {setMensagemErro('')}, 5000)
        }else{
            sorteio(parseInt(quantidade));
        }
        setQuantidade('');
    }

    return (
        <div className={s.sortear}>
            <h2 className={s.titulo}>Sortear</h2>

            <div className={s.sortear__container}>
                <label className={s.sortear__label} htmlFor="sorteados">Quantos sorteados?</label>
                <input 
                    name='sorteados'
                    className={s.sortear__input} 
                    value={quantidade}
                    onChange={ evento => validarCampo(evento)}
                    type="text"
                    placeholder='ex: 1'
                    />
            </div>
            <button className={s.button} onClick={ realizarSorteio } disabled={!quantidade}>Sortear</button>
            { mensagemErro && <p className={s.erro} role='alert'>{mensagemErro}</p>}
        </div>
    )
}
