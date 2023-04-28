import { useRecoilValue, useSetRecoilState } from 'recoil';
import sortear from '../functions/sortear';
import { erroStateSortear, listaParticipantesState, listaSorteadosState } from 'state/atom';
import { useNavigate } from 'react-router-dom';

export default function useSorteio() {
    const sortearParticipantes = sortear();
    const listaParticipantes = useRecoilValue(listaParticipantesState);
    const setResultado = useSetRecoilState(listaSorteadosState);
    const setErro = useSetRecoilState(erroStateSortear);
    const navigate = useNavigate();

    return (quantidade: number) => {
        if (listaParticipantes.length === 0){
            setErro('Adicione participantes para o sorteio');
            setTimeout( () => {setErro('')}, 5000)
            return
        }
        if (quantidade > listaParticipantes.length) {
            setErro('O número de sorteados deve ser menor que participantes');
            setTimeout( () => {setErro('')}, 5000)
            return
        }       

        const ListaEmbaralhada = sortearParticipantes(listaParticipantes)
        let resultado:string[] = [];

        for (let i = 0 ; i < quantidade ; i++){
            resultado = [...resultado, ListaEmbaralhada[i]]
        }
        setResultado(resultado);
        navigate('/sorteados')         
        return

    }
}
