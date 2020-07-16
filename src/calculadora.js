import React, {useState} from 'react'
import './calculadora.css'
import {Jumbotron, Container, Row, Col, Button, Form} from 'react-bootstrap'

function Calculadora() {
  const [txtNumeros, setTxtNumeros] = useState('0')

  function definirOperacao(op){
      setTxtNumeros(op)
  }

  function adicionarNumero(numero){
        setTxtNumeros(txtNumeros + numero)
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
                    <Button variant="danger">C</Button>
                </Col>
                <Col xs={9}>
                    <Form.Control type="text" name="txtNumero" className="text-right" readOnly="readonly" value={txtNumeros}/>
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
                    <Button variant="warning" onClick={()=>definirOperacao('/')}>/</Button>
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
                    <Button variant="warning"  onClick={()=>definirOperacao('*')}>*</Button>
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
                    <Button variant="warning"  onClick={()=>definirOperacao('-')}>-</Button>
                </Col>
            </Row>

            <Row>
                <Col xs={3}>
                    <Button variant="light" onClick={()=>adicionarNumero('0')}>0</Button>
                </Col>
                <Col xs={3}>
                    <Button variant="light">.</Button>
                </Col>
                <Col xs={3}>
                    <Button variant="success">=</Button>
                </Col>
                <Col xs={3}>
                    <Button variant="warning"  onClick={()=>definirOperacao('+')}>+</Button>
                </Col>
            </Row>
        </Container>

      </Jumbotron>
  );
}

export default Calculadora;
