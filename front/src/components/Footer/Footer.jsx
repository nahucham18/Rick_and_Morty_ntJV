import style from './Footer.module.css'
import imgWpp from '../../assets/imagenes/whatsapp_icon.png'
import imgLink from '../../assets/imagenes/linkedin_icon.png'
import imgGit from '../../assets/imagenes/github_icon.png'

const Footer = () =>{
    return (
        <footer className={style.footer}>
            <p className={style.p}>Creado por Nahuel Chamorro</p>
            <img className={style.imagenRed} src={imgWpp} alt='whatsapp' />
            <img className={style.imagenRed} src={imgLink} alt='Linkedin' />
            <img className={style.imagenRed} src={imgGit} alt='GitHub' />
        </footer>
    )
}

export default Footer;