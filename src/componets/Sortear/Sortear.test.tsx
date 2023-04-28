import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "state/hooks/useListaParticipantes"
import Sortear from "./index";

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

        const input = screen.getByPlaceholderText('ex: 1')
        const botao = screen.getByRole('button')

        expect(input).toBeInTheDocument;
        expect(botao).toBeDisabled;
        
    })

    test('Quando o input está vazio, não deixar sortear', () => {
        render(
            <RecoilRoot>
                <Sortear />
            </RecoilRoot>
        )

        const input = screen.getByPlaceholderText('ex: 1')
        const botao = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 1
            }
        });
        
        fireEvent.click(botao);        
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

        expect(botao).toBeDisabled;
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
        
    })
})