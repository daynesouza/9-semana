import { useRecoilValue } from "recoil";
import { erroStateForm } from "../atom";

export const useMensagemErro = () => {
    return useRecoilValue(erroStateForm);
}

