import { screen, render } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Participantes from "componets/Participantes"
import { useListaParticipantes } from "state/hooks/useListaParticipantes"

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

jest.mock('../../state/hooks/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn()
    }
})

describe('Uma lista vazia de participantes', () => {
    beforeEach( () => {
        (useListaParticipantes as jest.Mock).mockReturnValue([])
    })
    test('Lista deve iniciar vazia', () => {
        render(
            <RecoilRoot>
                <Participantes />
            </RecoilRoot>
        )
        
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0)
    })
})

describe('Uma lista preenchida de participantes', () => {
    const participantes = ['João', 'Maria']
    beforeEach( () => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test('Deve ser renderizada sem elementos', () => {
        render(
            <RecoilRoot>
                <Participantes />
            </RecoilRoot>
        )

        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(participantes.length);
    })
})

