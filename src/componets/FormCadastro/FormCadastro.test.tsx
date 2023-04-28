import { act, fireEvent, render, screen } from "@testing-library/react";
import FormCadastro from "componets/FormCadastro";
import { RecoilRoot } from "recoil";

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

//Jest
describe('o comportamento do Formulario.tsx', () => {
    test('Quando o input está vazio, novos participantes não podem ser adicionados', () => {
        render(
            <RecoilRoot>
                <FormCadastro />
            </RecoilRoot>
        )
        
        //Encontrar input no DOOM
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        //Encontrar botão
        const botao = screen.getByRole('button')

        //garantir que o input estaja no documento
        expect(input).toBeInTheDocument
        //garantir que o botão esteja desabilitado
        expect(botao).toBeDisabled()
    })

    test('Adicionar um participante caso exista um nome preenchido', () => {
        render(
            <RecoilRoot>
                <FormCadastro />
            </RecoilRoot>
        )
        //Encontrar input no DOOM
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        //Encontrar botão
        const botao = screen.getByRole('button')

        //inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Dayne'
            }
        });

        //clicar no botão submeter
        fireEvent.click(botao);

        //garantir que o input esteja com o foco ativo
        expect(input).toHaveFocus();

        //garantir que o input não tenha um valor
        expect(input).toHaveValue('');
    })

    test('Nomes duplicados não podem ser adicionados na lista,', () => {
        render(
            <RecoilRoot>
                <FormCadastro />
            </RecoilRoot>
        )

        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 'Dayne'
            }
        });
        fireEvent.click(botao);

        fireEvent.change(input, {
            target: {
                value: 'Dayne'
            }
        });
        fireEvent.click(botao);

        //Encontra mensagem de erro
        const mensagemErro = screen.getByRole('alert')

        //Espera que exista uma mensagem de erro
        expect(mensagemErro.textContent).toBe('Nomes duplicados não são permitidos!')
    })

    test('A mensagem deve sumir da tela após 5 segundos', () => {
        //cria um temporizador falso
        jest.useFakeTimers()
        render(
            <RecoilRoot>
                <FormCadastro />
            </RecoilRoot>
        )

        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 'Dayne'
            }
        });
        fireEvent.click(botao);

        fireEvent.change(input, {
            target: {
                value: 'Dayne'
            }
        });
        fireEvent.click(botao);

        let mensagemErro = screen.queryByRole('alert');
        expect(mensagemErro).toBeInTheDocument();

        //Executa todos os contadores do documento
        act( () => {
            jest.runAllTimers()
        });

        mensagemErro = screen.queryByRole('alert');
        expect(mensagemErro).toBeNull();
    })
})
