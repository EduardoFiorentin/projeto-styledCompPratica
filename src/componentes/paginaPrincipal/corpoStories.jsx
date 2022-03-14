import styled from "styled-components";

import imagemPequena from '../../assets/imagens/foto pequena.png'
import conteudo from '../../conteudo/stories.json'

const StoriesContainer = styled.section`
    display: flex;
    flex-wrap: nowrap;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.054);
    padding-bottom: 10px;
    width: 100vw;
    overflow: auto;
    white-space: nowrap;
    ::-webkit-scrollbar {
        display: none;
    }
`
const StoriesCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 10px;
    margin-right: 10px;
`
const StoriesImg = styled.img`
    width: 45px;
    border-radius: 50%;
    margin-top: 60px;
    margin-bottom: 5px;
  `
const StoriesNome = styled.p`
    display: block;
    margin: auto;
`

const MontagemStory = (props) => {
    return (
            <StoriesCard>
                <StoriesImg src={props.imagem}/>
                <StoriesNome>{props.nome}</StoriesNome>
            </StoriesCard>
    )
}
const Stories = () => {
    return (
        <StoriesContainer>
            {
            conteudo.map((story, key) => {
                return <MontagemStory key={key} imagem={imagemPequena} nome={story.nome}/>
            })
            }
        </StoriesContainer>
    )
}

export default Stories