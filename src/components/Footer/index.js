import styled from './Footer.module.css'
import { ReactComponent as MarcaRegistrada } from 'img/marca_registrada.svg'

export default function Footer () {
    return (
        <footer className={styled.rodape}>
            <MarcaRegistrada />

            <p>Desenvolvido por Alura.</p>
        </footer>
    )
}