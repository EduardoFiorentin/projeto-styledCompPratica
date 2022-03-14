import styled from "styled-components";
import conteudo from '../../conteudo/publicacoes.json'

import imagemPequena from '../../assets/imagens/foto pequena.png'
import imagemGrande from '../../assets/imagens/foto.png'
import iconeCurtir from '../../assets/icones/curtir.png'
import iconeComentar from '../../assets/icones/comentar.png'
import iconeCompartilhar from '../../assets/icones/compartilhar.png'
import iconeSalvar from '../../assets/icones/salvar.png'

const Destaque = styled.span`
    font-weight: 700;
`

const CardContainer = styled.div`
    margin-top: 10px;
    font-family: 'Roboto', sans-serif;
`
const CardCabecalho = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-top: 15px;
    margin-right: 15px;
`
const FotoCabecalho = styled.img`
    width: 35px;
    border-radius: 50%;
`
const CabecalhoInfo = styled.div`
    margin-left: 5px;
    font-size: 0.8rem;
`
const CabecalhoNome = styled.p`
    font-weight: 700;
`
const CabecalhoLocal = styled.p``
const ContainerFoto = styled.div``
const Foto = styled.img`
    width: 100vw;
    height: auto;
    margin-top: 10px;
`
const ContainerIcones = styled.div`
    display: flex;
    width: 100vw;
    justify-content: space-between;
    margin-top: 5px;
`
const ContainerIconesA = styled.span`
    display: inline-block;
    width: auto;
    margin-left: 5px;
`
const ContainerIconesB = styled.span`
    display: inline-block;
    width: auto;
    justify-self: flex-end;
    margin-right: 10px;
`
const Icone = styled.img`
    width: 23px;
    height: 21px;
    margin-left: 17px;
`
const Curtidas = styled.div`
    margin-left: 10px;
    margin-top: 5px;
`
const Curtida = styled.p`
    font-size: 0.9rem;
    margin-bottom: 5px;
`
const Descrissao = styled.p`
    margin-left: 10px; 
`
const ContainerComentarios = styled.div`
    margin-left: 10px;
    margin-top: 5px;
`
const ComentariosVerTodos = styled.p``
const ContainerComentario = styled.div`
    margin-top: 5px;
`
const Comentario = styled.p``
const ContainerComentar = styled.div`
    margin-left: 10px;
    margin-top: 5px;
    display: flex;
`
const ComentarImg = styled.img`
    border-radius: 50%;
    height: 21px;
    width: 21px;
`
const ComentarInput = styled.input`
    font-size: 0.7rem;
    border: none;
    :focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }
`
const TempoPublicacao = styled.p`
margin-left: 10px;
margin-top: 5px;
font-size: 0.7rem;
color: rgba(0, 0, 0, 0.7);
`




const Publicacoes = () => {
    return (
        conteudo.map((publi, index)=>{
            return (
                <CardContainer key={index}>
                    <CardCabecalho>
                        <FotoCabecalho src={imagemPequena}/>
                        <CabecalhoInfo>
                            <CabecalhoNome>{publi.nome}</CabecalhoNome>
                            <CabecalhoLocal>{publi.local}</CabecalhoLocal>
                        </CabecalhoInfo>
                    </CardCabecalho>

                    <ContainerFoto>
                        <Foto src={imagemGrande}/>
                    </ContainerFoto>

                    <ContainerIcones>
                        <ContainerIconesA>
                            <Icone src={iconeCurtir}/>
                            <Icone src={iconeComentar}/>
                            <Icone src={iconeCompartilhar}/>
                        </ContainerIconesA>
                        <ContainerIconesB>
                            <Icone src={iconeSalvar}/>
                        </ContainerIconesB>
                    </ContainerIcones>

                    <Curtidas>
                        <Curtida>Curtido por <Destaque>{publi.pCurtir}</Destaque> e <Destaque>outras pessoas</Destaque></Curtida>
                    </Curtidas>

                    <Descrissao>
                        <Destaque>{publi.nome} </Destaque>
                        {publi.descrissao}
                    </Descrissao>

                    <ContainerComentarios>
                        <ComentariosVerTodos>
                            Ver todos os
                            <Destaque>
                                {" " + publi.Comentarios.length + " "}
                            </Destaque>
                            comentarios
                        </ComentariosVerTodos>
                        <ContainerComentario>
                            <Comentario>
                                <Destaque>
                                    {publi.Comentarios[0][0]}
                                </Destaque>
                                {" "+publi.Comentarios[0][1]}
                            </Comentario>
                        </ContainerComentario>
                    </ContainerComentarios>

                    <ContainerComentar>
                        <ComentarImg src={imagemPequena}/>
                        <ComentarInput placeholder="Escreva um comentario..." type="text"></ComentarInput>
                    </ContainerComentar>

                    <TempoPublicacao>Há x dias</TempoPublicacao>
                </CardContainer>
            )
        })
    )
}

export default Publicacoes