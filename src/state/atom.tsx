import { atom } from 'recoil';

export const listaParticipantesState = atom<string[]>({
    key: 'listaParticipantesState',
    default: []
})
export const listaSorteadosState = atom<string[]>({
    key: 'listaSorteadosState',
    default: []
})
export const erroStateForm = atom<string>({
    key: 'erroStateForm',
    default: ''
})
export const erroStateSortear = atom<string>({
    key: 'erroStateSortear',
    default: ''
})
