import styled from './post.module.css'

export const Post = ({ post }) => {
    return (
        <div className={styled.post}>
            <img 
                className={styled.capa}
                src={`posts/${post.id}/capa.png`}
                alt='imagem de capa do post'
            />

            <h2 className={styled.titulo}>{post.titulo}</h2>
            <button className={styled.botaoLer}>Ler</button>
        </div>
    )
}

export default Post