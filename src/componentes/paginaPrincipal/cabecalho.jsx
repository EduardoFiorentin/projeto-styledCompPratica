import styled from 'styled-components'


//imagens
import imgMais from '../../assets/icones/mais.png'
import imgCurtir from '../../assets/icones/curtir.png'
import imgCompartilhar from '../../assets/icones/compartilhar.png'

const CabecalhoContainer = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    padding-top: 10px;
    padding-bottom: 10px;
    position: fixed;
    background-color: white;
    top: 0;
`
const CabecalhoTitulo = styled.div`
    display: flex;
    font-size: 1.35rem;
    margin-left: 10px;
`
const TextoTitulo = styled.h2`
    display: flex;
    font-size: 2.3rem;
    font-family: "Cookie", cursive;
`
const CabecalhoIcones = styled.div`
    align-self: center;
    margin-right: 30px;
    margin-top: 12px;
`
const Icone = styled.img`
    width: 23px;
    height: 21px;
    margin-left: 30px;
`

//montagem cabecalho
const Cabecalho = () => {
    return (
        <CabecalhoContainer>
            <CabecalhoTitulo>
                <TextoTitulo>Instagram</TextoTitulo>
            </CabecalhoTitulo>
            <CabecalhoIcones>
                <Icone src={imgMais}/>
                <Icone src={imgCurtir}/>
                <Icone src={imgCompartilhar}/>
            </CabecalhoIcones>
        </CabecalhoContainer>
    )
}

export default Cabecalho