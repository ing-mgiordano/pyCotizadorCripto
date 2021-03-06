import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
    background-color: #515153;
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

const Formulario = ({ setMonedas }) => {
    const [ criptos, setCriptos ] = useState([])
    const [ error, setError ] = useState(false)

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elije tu Moneda', monedas)
    const [ criptomoneda, SelectCriptomonedas ] = useSelectMonedas('Elije tu Cripto', criptos)
    
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            //console.log(resultado)

            const arrayCriptos = resultado.Data.map(cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                //console.log(objeto)
                return objeto
            })
            //console.log(arrayCriptos)

            setCriptos(arrayCriptos)
        }
        consultarAPI()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        
        if([moneda, criptomoneda].includes('')) {
            setError(true)
            return
        }

        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            

            <form
                onSubmit={handleSubmit}    
            >
                
                <SelectMonedas />
                <SelectCriptomonedas />
        
                <InputSubmit 
                    type='submit' 
                    value='Cotizar' 
                />
            </form>
        </>
    )
}

export default Formulario

