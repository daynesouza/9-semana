import { useRecoilState, useSetRecoilState } from "recoil";
import { erroStateForm, listaParticipantesState } from "state/atom";

export default function useAdicionarParticipantes(){
    const [listaParticipantes, setListaParticipantes] = useRecoilState(listaParticipantesState);
    const setErro = useSetRecoilState(erroStateForm);

    function validarNomeDuplicado(nomeDoParticipante: string){
        if (listaParticipantes.includes(nomeDoParticipante)){
            setErro('Nomes duplicados não são permitidos!')
            setTimeout( () => {setErro('')}, 5000)
            return
        }
        return setListaParticipantes( listaAtual => [...listaParticipantes, nomeDoParticipante] )
    }

    return validarNomeDuplicado
}
