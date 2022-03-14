import styled from 'styled-components'

//imagens
import imgCasa from '../../assets/icones/casa.png'
import imgProcurar from '../../assets/icones/procurar.png'
import imgVideo from '../../assets/icones/video.png'
import imgBolsa from '../../assets/icones/bolsa.png'
import imgPerfil from '../../assets/imagens/foto pequena.png'

const RodapeCotainer = styled.section`
display: flex;
justify-content: space-around;
width: 100vw;
position: fixed;
bottom: 0;
background-color: white;
padding: 10px 0px;
border-top: 1px solid lightgrey;
`
const RodapeIcone = styled.img`
    margin: 0;
    width: ${(props) => {
        if (props.perfil) {
            return '25px'
        } else {
            return '23px'
        }
    }};
    height: ${(props) => {
        if (props.perfil) {
            return '25px'
        } else {
            return '21px'
        }
    }};
    border-radius: ${(props) => {
        if (props.perfil) {
            return '50%'
        } else {
            return '0%'
        }
    }};
`

const Rodape = () => {
    return (
        <RodapeCotainer>
            <RodapeIcone src={imgCasa}/>
            <RodapeIcone src={imgProcurar}/>
            <RodapeIcone src={imgVideo}/>
            <RodapeIcone src={imgBolsa}/>
            <RodapeIcone perfil src={imgPerfil}/>
        </RodapeCotainer>
    )
}

export default Rodape