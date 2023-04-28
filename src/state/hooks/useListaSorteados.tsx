import { useRecoilValue } from "recoil";
import { listaSorteadosState } from "state/atom";

export const useListaSorteadosState = () => {
    return useRecoilValue(listaSorteadosState);
}
