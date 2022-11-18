import {useState } from 'react'

import {Button, Form, Row, Col, FormLabel, Alert } from 'react-bootstrap'
import useCategorias from '../hooks/useCategorias'
import useBebidas from '../hooks/useBebidas'


/* 1) Se trae aca a la Api de Categorias
2) Se mapea la Api 
3) Se crea State para guardar info delos dos (Tipo objeto) y Para detectar cambios en el onChange
4) value contiene el estado ""
5) set los cambios registrado en el onchange haciendo copia del anterior
6) Comprobar que todo funcione

7) onsusubmit va a tener una funcion handleSubmit que se la va a apasar al form


 */



const Formulario = () => {

    const [busqueda, setBusqueda ] = useState({
        nombre: '', 
        categoria: ''
    });

    const {consultarBebidas, } = useBebidas();
    const [alerta, setAlerta] = useState('');
    const {categorias} = useCategorias();

    const handleSubmit = e => {
        e.preventDefault();


        if(Object.values(busqueda).includes('')){

            setAlerta('Todos los campos son obligatorios')
            return
        }

            setAlerta('');


            consultarBebidas(busqueda); // Solo cuando no esta vacia es decir va a tener info
            

            




       






    }





  
  return (

    

    <Form  onSubmit={handleSubmit}>


        {alerta && <Alert  className='text-center'  variant='danger'>{alerta}</Alert>}


        <Row>

            <Col md={6}>
                
                <Form.Group className='mb-3'>

                    <Form.Label htmlFor='nombre'>Nombre Bebida </Form.Label>

                    <Form.Control
                    id='nombre'
                    type='text'
                    placeholder='Ej: Tequila, Vodka, ect '
                    name="nombre"

                    value={busqueda.nombre}

                    onChange={e => setBusqueda({

                        ...busqueda, 
                        [e.target.name] : e.target.value

                    })}
   
                    />

                </Form.Group>
            </Col>

            <Col md={6}>

                <Form.Group className='mb3'>

                        <Form.Label htmlFor='categoria'>Categoría Bebida</Form.Label>

                        <Form.Select

                            id='categoria'
                            name='categoria'
        
                            value={busqueda.categoria}

                            onChange={e => setBusqueda({
                                ...busqueda, 
                                [e.target.name] : e.target.value

                            })}
                        >


                            <option>- Selecciona Categoria -</option>
                            {categorias.map( (categoria)=>(

                                <option
                                    key={categoria.strCategory}
                                    value= {categoria.strCategory}
                                >
                                            {categoria.strCategory}
                                </option>

                              

                              

                            ))}


                         
                            
                        </Form.Select>

                </Form.Group>
                

            </Col>

        </Row>



        <Row className='justify-content-end'>

            <Col md={3}>

                <Button
                variant='danger'
                className='text-uppercase w-100'
                type='submit'

                


            


                
                >Buscar Bebidas</Button>
            
            </Col>
        </Row>


    </Form>

 
  )
}

export default Formulario