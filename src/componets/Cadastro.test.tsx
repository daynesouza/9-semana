import { render, screen } from "@testing-library/react";
import React form 'react';

//Jest
test('Quando o input está vazio, novos participantes não podem ser adicionados', () => {

    render(<Formulario />)

    const input = screen.getByPlaceholderText('Insira os nomems dos participantes')

    const botao = screen.getByRole('button')

    expect(input).toBeInTheDocument

    expect(botao).toBeDisabled()
})