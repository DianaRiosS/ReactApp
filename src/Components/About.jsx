import './About.css'
import Profile from '../assets/Profile.jpeg'

const About = () => (
    <>
        <h2>Diana Rios</h2>
        <img src={Profile} alt="Mi imagen" />
        <p><small>Correo: </small>diana.rios.sant@gmail.com</p>
        <p><small>Colores favoritos: </small>Negro y azul</p>   
    </>
)

export default About;