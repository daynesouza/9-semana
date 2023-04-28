import { useRecoilValue } from "recoil";
import { erroStateSortear } from "../atom";

export const useMensagemErro = () => {
    return useRecoilValue(erroStateSortear);
}
