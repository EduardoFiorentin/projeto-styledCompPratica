import Cabecalho from "./cabecalho";
import Publicacoes from "./corpoPrincipal";
import Stories from "./corpoStories";
import Rodape from "./rodape";

const PaginaPrincipal = () => {
    return (
        <>
            <Cabecalho/>
            <Stories/>
            <Publicacoes/>
            <Rodape/>
        </>
    )
}

export default PaginaPrincipal