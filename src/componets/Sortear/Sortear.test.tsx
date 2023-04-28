import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "state/hooks/useListaParticipantes"
import Sortear from "./index";

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

describe('Sorteio', () => {
    const participantes = ['João', 'Maria', 'ciclano']
    beforeEach( () => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test('Quando o input está vazio, não deixar sortear', () => {
        render(
            <RecoilRoot>
                <Sortear />
            </RecoilRoot>
        )
        
        const botao = screen.getByRole('button')
        const input = screen.getByPlaceholderText('ex: 1')

         fireEvent.change(input, {
            target: {
                value: ''
            }
        })    
        
        expect(botao).toBeDisabled;
        
    })

    test('Sortear se o número for menor ou igual ao número de sorteados', () => {
        render(
            <RecoilRoot>
                <Sortear />
            </RecoilRoot>
        )

        const input = screen.getByPlaceholderText('ex: 1')
        const botao = screen.getByRole('button')
        
        fireEvent.change(input, {
            target: {
                value: 3
            }
        })

        fireEvent.click(botao);
    })

    test('Não sortear se o número for maior ao número de sorteados', () => {
        render(
            <RecoilRoot>
                <Sortear />
            </RecoilRoot>
        )

        const input = screen.getByPlaceholderText('ex: 1')
        const botao = screen.getByRole('button')        
        
        fireEvent.change(input, {
            target: {
                value: 4
            }
        })
        fireEvent.click(botao);

        const erro = screen.getByRole('alert')
        expect(erro).toBeInTheDocument;
        
    })

    test('A mensagem de erro de ve sumir da tela após 5 segundos', () => {
        jest.useFakeTimers()
        render(
            <RecoilRoot>
                <Sortear />
            </RecoilRoot>
        )

        const input = screen.getByPlaceholderText('ex: 1')
        const botao = screen.getByRole('button')
        

        fireEvent.change(input, {
            target: {
                value: 5
            }
        });
        fireEvent.click(botao);

        fireEvent.click(botao);

        let mensagemErro = screen.queryByRole('alert');
        expect(mensagemErro).toBeInTheDocument();

        act( () => {
            jest.runAllTimers()
        });

        mensagemErro = screen.queryByRole('alert');
        expect(mensagemErro).toBeNull();
    })
})