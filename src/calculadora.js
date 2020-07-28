import React, {useState} from 'react'
import './calculadora.css'
import {Jumbotron, Container, Row, Col, Button, Form} from 'react-bootstrap'
import CalculadoraService from './calculadora.service'

function Calculadora() {
  const [txtNumeros, setTxtNumeros] = useState('0')
  const [txtNumero1, setTxtNumero1] = useState('0')
  const [txtNumero2, setTxtNumero2] = useState(null)
  const [txtOperacao, setTxtOperacao] = useState(null)

  const [calcular, concatenarNumero, SOMA, SUB, DIV, MULT] = CalculadoraService()


  function definirOperacao(op){
      if(txtOperacao === null) {
        setTxtOperacao(op)
        return
      }
      if(txtNumero2 !== null){
          const resultado = calcular(parseFloat(txtNumero1), parseFloat(txtNumero2), op)
          setTxtOperacao(op)
          setTxtNumero1(resultado.toString())
          setTxtNumero2(null)
          setTxtNumeros(resultado)
      }
  }

  function limpar(){
    setTxtOperacao(null)
    setTxtNumero1('0')
    setTxtNumero2(null)
    setTxtNumeros('0')
  }

  function acaoCalcular(){
    if(txtNumero2 ===  null) return

    const resultado = calcular(parseFloat(txtNumero1), parseFloat(txtNumero2), txtOperacao)
    setTxtNumeros(resultado)
  } 

  function adicionarNumero(numero){
      let resultado
      if(txtOperacao === null) {
          resultado = concatenarNumero(txtNumero1, numero ) 
          setTxtNumero1(resultado)
      }
      else {
          resultado = concatenarNumero(txtNumero2, numero ) 
          setTxtNumero2(resultado)
      }

      setTxtNumeros(resultado)
  }

  return (
      <Jumbotron style={{
          background: 'transparent !important', 
          backgroundColor: '#d0d0d0',
          padding: 5,
          margin: 4,
          width: 400
        }}>

        <Container>
            <Row>
                <Col xs={3}>
                    <Button variant="danger" onClick={limpar}>C</Button>
                </Col>
                <Col xs={9}>
                    <Form.Control type="text" name="txtNumero" className="text-right" readOnly="readonly" value={txtNumeros} data-testid="txtNumeros"/>
                </Col>
            </Row>


            <Row>
                <Col xs={3}>
                    <Button variant="light" onClick={()=>adicionarNumero('7')}>7</Button>
                </Col>
                <Col xs={3}>
                    <Button variant="light" onClick={()=>adicionarNumero('8')}>8</Button>
                </Col>
                <Col xs={3}>
                    <Button variant="light" onClick={()=>adicionarNumero('9')}>9</Button>
                </Col>
                <Col xs={3}>
                    <Button variant="warning" onClick={()=>definirOperacao(DIV)}>/</Button>
                </Col>
            </Row>

            <Row>
                <Col xs={3}>
                    <Button variant="light" onClick={()=>adicionarNumero('4')}>4</Button>
                </Col>
                <Col xs={3}>
                    <Button variant="light" onClick={()=>adicionarNumero('5')}>5</Button>
                </Col>
                <Col xs={3}>
                    <Button variant="light" onClick={()=>adicionarNumero('6')}>6</Button>
                </Col>
                <Col xs={3}>
                    <Button variant="warning"  onClick={()=>definirOperacao(MULT)}>*</Button>
                </Col>
            </Row>

            <Row>
                <Col xs={3}>
                    <Button variant="light" onClick={()=>adicionarNumero('1')}>1</Button>
                </Col>
                <Col xs={3}>
                    <Button variant="light" onClick={()=>adicionarNumero('2')}>2</Button>
                </Col>
                <Col xs={3}>
                    <Button variant="light" onClick={()=>adicionarNumero('3')}>3</Button>
                </Col>
                <Col xs={3}>
                    <Button variant="warning"  onClick={()=>definirOperacao(SUB)}>-</Button>
                </Col>
            </Row>

            <Row>
                <Col xs={3}>
                    <Button variant="light" onClick={()=>adicionarNumero('0')}>0</Button>
                </Col>
                <Col xs={3}>
                    <Button variant="light" onClick={()=>adicionarNumero('.')}>.</Button>
                </Col>
                <Col xs={3}>
                    <Button variant="success" onClick={acaoCalcular}>=</Button>
                </Col>
                <Col xs={3}>
                    <Button variant="warning"  onClick={()=>definirOperacao(SOMA)}>+</Button>
                </Col>
            </Row>
        </Container>

      </Jumbotron>
  );
}

export default Calculadora;
