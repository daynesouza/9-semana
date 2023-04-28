import { useRef, useState } from 'react';
import s from './Form.module.scss';
import useAdicionarParticipantes from 'state/hooks/useAdicionarParticipante';
import { useMensagemErro } from 'state/hooks/useMensagemErroForm';

export default function FormCadastro(){

    const inputRef = useRef<HTMLInputElement>(null);

    const [nome, setNome] = useState('');

    const adicionaNaLista = useAdicionarParticipantes();
    const mensagemErro = useMensagemErro();

    const adicionarParticipante = ( evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        adicionaNaLista(nome);
        setNome('');
        inputRef.current?.focus();

    }

    return (
        <form className={s.cadastro} onSubmit={ evento => adicionarParticipante(evento)}>
            <h2 className={s.cadastro__tittle}>Sorteio de Nomes</h2>
            <div className={s.cadastro__container}>
                <label className={s.cadastro__nome} htmlFor="nome">Nome</label>
                <div className={s.cadastro__input__container}>
                    <input 
                        name='nome'
                        ref={inputRef}
                        className={s.cadastro__input} 
                        value={nome}
                        onChange={ evento => setNome(evento.target.value.toUpperCase())}
                        type="text"
                        placeholder='Insira os nomes dos participantes'
                    />
                    <button className={s.cadastro__button} disabled={!nome}>Adicionar</button>
                </div>
                { mensagemErro && <p className={s.erro} role='alert'>{mensagemErro}</p>}
            </div>
        </form>
    )
}
