import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 10px;
    transition: background-color .5s ease;

    &:hover{ //cambiar estilos al pasar el mouse por arriba
        background-color: #2b2dbd;
        cursor: pointer;
    }
`

const Formulario = () => {

    const [ SelectMonedas ] = useSelectMonedas()
    
    SelectMonedas()

    return (
        <form>
        

            <InputSubmit 
                type='submit' 
                value='Cotizar' 
            />
        </form>
    )
}

export default Formulario
