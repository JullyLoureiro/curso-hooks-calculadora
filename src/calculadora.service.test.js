import React from 'react'
import ReactDOM from 'react-dom'
import CalculadoraService from './calculadora.service'


describe('Teste da Calculadora Service', ()=>{
    const [calcular, concatenarNumero, SOMA, SUB, DIV, MULT] = CalculadoraService()

    it('Deve garantir que 1 + 4 = 5', ()=>{
        let soma = calcular(1, 4, SOMA)
        expect(soma).toEqual(5)
    })

    it('Deve garantir que 10 - 3 = 7', ()=>{
        let subt = calcular(10, 3, SUB)
        expect(subt).toEqual(7)
    })

    it('Deve garantir que 6 / 2 = 3', ()=>{
        let divi = calcular(6, 2, DIV)
        expect(divi).toEqual(3)
    })

    it('Deve garantir que 6 * 4 = 24', ()=>{
        let multi = calcular(6, 4, MULT)
        expect(multi).toEqual(24)
    })

    it('Deve retornar 0 para operação inválida', ()=>{
        let opInvalida = calcular(6, 9, '%')
        expect(opInvalida).toEqual(0)
    })

})

