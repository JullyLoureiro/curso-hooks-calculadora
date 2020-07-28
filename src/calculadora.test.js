import React from 'react'
import Calculadora from './calculadora'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Calculadora', ()=>{
 
    it('Deve limpar o campo de números', ()=>{
        const {getByTestId, getByText} = render(<Calculadora />);
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('C'))
        expect(getByTestId('txtNumeros')).toHaveValue('0')
    })


    it('Deve somar 2 + 3 e obter 5', ()=>{
      const {getByTestId, getByText} = render(<Calculadora />);
      fireEvent.click(getByText('2'))
      fireEvent.click(getByText('+'))
      fireEvent.click(getByText('3'))
      fireEvent.click(getByText('='))
      expect(getByTestId('txtNumeros')).toHaveValue('5')
    })

    it('Deve subtrair 7 - 4 e obter 3', ()=>{
      const {getByTestId, getByText} = render(<Calculadora />);
      fireEvent.click(getByText('7'))
      fireEvent.click(getByText('-'))
      fireEvent.click(getByText('4'))
      fireEvent.click(getByText('='))
      expect(getByTestId('txtNumeros')).toHaveValue('3')
    })

    it('Deve dividir 20 / 2 e obter 10', ()=>{
      const {getByTestId, getByText} = render(<Calculadora />);
      fireEvent.click(getByText('2'))
      fireEvent.click(getByText('0'))
      fireEvent.click(getByText('/'))
      fireEvent.click(getByText('2'))
      fireEvent.click(getByText('='))
      expect(getByTestId('txtNumeros')).toHaveValue('10')
    })

    it('Deve multiplicar 2 * 2 e obter 4', ()=>{
      const {getByTestId, getByText} = render(<Calculadora />);
      fireEvent.click(getByText('2'))
      fireEvent.click(getByText('*'))
      fireEvent.click(getByText('2'))
      fireEvent.click(getByText('='))
      expect(getByTestId('txtNumeros')).toHaveValue('4')
    })

    it('Deve somar 4.5 + 2 e obter 6.5', ()=>{
      const {getByTestId, getByText} = render(<Calculadora />);
      fireEvent.click(getByText('4'))
      fireEvent.click(getByText('.'))
      fireEvent.click(getByText('5'))
      fireEvent.click(getByText('+'))
      fireEvent.click(getByText('2'))
      fireEvent.click(getByText('='))
      expect(getByTestId('txtNumeros')).toHaveValue('6.5')
    })

 })


