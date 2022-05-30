import styled from "@emotion/styled"

const Cotizacion = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
    font-size: 17px;
    span {
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 22px;
    span {
        font-weight: 700;
    }
`

const Resultado = ({ resultado }) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado

    //console.log(resultado)
  return (
    <Cotizacion>
        <Imagen
            src={`https://cryptocompare.com/${IMAGEURL}`}
            alt='imagen cripto'
        />
        <div>
            <Precio>El Precio es de: <span>{PRICE}</span></Precio>
            <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
            <Texto>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>%</Texto>
            <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Cotizacion>
  )
}

export default Resultado
