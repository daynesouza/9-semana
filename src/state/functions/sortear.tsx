import shuffle from "just-shuffle";
import { useRecoilValue } from "recoil";
import { listaParticipantesState } from "state/atom";

export default function sortear(){
    
    function sorteio(listaParticipantes: string[]){
        return shuffle(listaParticipantes);              
    }

    return sorteio;
}
