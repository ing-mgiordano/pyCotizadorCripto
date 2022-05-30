import { useEffect } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

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
    margin-top: 30px;

    &:hover{ //cambiar estilos al pasar el mouse por arriba
        background-color: #2b2dbd;
        cursor: pointer;
    }
`

const Formulario = () => {

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elije tu Moneda', monedas)
    
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            console.log(resultado.Data)
        }
        consultarAPI()
    }, [])

    return (
        <form>
            
            <SelectMonedas />
            
            

            <InputSubmit 
                type='submit' 
                value='Cotizar' 
            />
        </form>
    )
}

export default Formulario
