import { screen, render } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Sorteados from "./Sorteados"
import { useListaSorteadosState } from "state/hooks/useListaSorteados"

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})
jest.mock('state/hooks/useListaSorteados', () => {
    return {
        useListaSorteadosState: jest.fn()
    }
})

describe('Pagina de Sorteados', () => {
    const participantes = ['João', 'Maria']
    beforeEach( () => {
        (useListaSorteadosState as jest.Mock).mockReturnValue(participantes)
    })

    test('Todos os sorteados devem ser exibidos', () => {
        render(
            <RecoilRoot>
                <Sorteados />
            </RecoilRoot>
        )
        
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participantes.length)

    })
})