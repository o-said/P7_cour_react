import '../styles/Banner.css'
import logo from '../assets/logo.png'//on importe le logo depuis le fichier logo.png de assets
import Recommendation from './Recommendation'//on importe le composant Recommendation depuis le fichier Recommendation.js
function Banner() {
    const title = 'La maison jungle'

    return (   // on affiche le composant Recommendation dans le composant Banner   
        <div className="lmj-banner">
            <div>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>{title}</h1>
            </div>              
            <Recommendation/>                               
        </div>       
    )
    /*
    const currentMonth = new Date().getUTCMonth()
    const isSpring = currentMonth >= 2 && currentMonth <= 5
    const recommandation =  isSpring ?  (
                <div>C'est le printemps, rempotez </div>
            ) : (
                <div>Ce n'est pas le moment de rempoter </div>
            )
    
    return (
        <div className="lmj-banner">
            <div>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>{title}</h1>
            </div>      
            {recommandation}                         
        </div>       
    )*/
}
export default Banner