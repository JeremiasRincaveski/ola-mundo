import styled from 'components/Banner/Banner.module.css'
import circuloColorido from 'img/circulo_colorido.png'
import minhaFoto from 'img/minha_foto.png'

export const Banner = () => {
    return (
        <div className={styled.banner}>
            <div className={styled.apresentacao}>
                <h1 className={styled.titulo}>
                    Olá, Mundo!
                </h1>
                
                <p className={styled.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>

            <div className={styled.imagens}>
                <img 
                    className={styled.circuloColorido}
                    src={circuloColorido}
                    alt="Circulo Colorido"
                    aria-hidden={true}
                />

                <img 
                    className={styled.minhaFoto}
                    src={minhaFoto}
                    alt="Minha Foto"
                />
            </div>
        </div>
    )
}

export default Banner